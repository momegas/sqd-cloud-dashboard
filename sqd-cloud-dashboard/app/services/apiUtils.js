import nc, { NextHandler } from 'next-connect';
import { MongoClient, Collection } from 'mongodb';
import jwt, { JwtPayload } from 'jsonwebtoken';

/**
 * Create a new handler.
 */
export const createHandler = () =>
  nc({
    onError: (err, _req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: err.message });
    },
    onNoMatch: (req, res, next) => {
      console.log(`No handler for ${req.method} ${req.url}`);
      res.status(404).json({ error: 'Not found' });
    },
  });

/**
 * Cashed database connection for reuse across the handlers
 */
export let collections = {};
export let db = null;
export let client;

/**
 * Connect to database. If already connected, do nothings.
 * Uses the variables above to cache the connection.
 */
export async function database(_req, _res, next) {
  if (db) {
    // Do nothing if already connected
    return next();
  }

  // process.env.MONGO_URL is set by jest-mongodb Preset
  // https://github.com/shelfio/jest-mongodb#3-configure-mongodb-client
  const connectionString = process.env.DB_CONNECTION_STRING || process.env.MONGO_URL;
  console.log(`Connecting to ${connectionString}`);
  client = new MongoClient(connectionString);
  await client.connect();
  db = client.db(process.env.DB_NAME);

  // Init collections if first time. Also cache them.
  const users = db.collection('users');
  collections = { users };

  next();
}

/**
 * Validates request body with given schema and throws error if invalid.
 * Uses curring to pass the schema to the handler.
 */
export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
    return;
  }
  next();
};

/**
 * Validates request header with given schema and throws error if invalid.
 * You can also specify if the header is required.
 * Uses curring to pass the schema to the handler.
 */
export const validateHeader =
  (schema, header, required = false) =>
  (req, res, next) => {
    if (required && !req.headers[header]) {
      res.status(400).json({ error: `Missing header ${header}` });
      return;
    }

    const { error } = schema.validate(req.headers[header]);
    if (error) {
      res.status(400).json({ error: `Header ${header} error: ${error.details[0].message}` });
      return;
    }
    next();
  };

/**
 * Authenticates the user by checking the token in the request header.
 * If the token is valid, the user is authenticated and the
 * request is passed to the next handler.
 */
export const authenticateUser = () => async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Attach it to req so that other handlers can use it.
    req.env = { user: JSON.stringify(decoded.data) };
  } catch (e) {
    res.status(400).json({ error: 'Invalid token' });
    return;
  }

  next();
};
