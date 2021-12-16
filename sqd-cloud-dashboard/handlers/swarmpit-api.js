import fs from 'fs';
import nc from 'next-connect';
import { authenticateUser } from '../app/services/apiUtils';
import axios from 'axios';

const wpStack = fs.readFileSync('./stacks/wp-compose.yaml');
const postgres = fs.readFileSync('./stacks/postgres-compose.yaml');
const mongo = fs.readFileSync('./stacks/mongo-compose.yaml');

const stack = {
  ['wp']: wpStack
    .toString()
    .replace('{{PORT}}', Math.floor(Math.random() * 999) + 8001),
  ['postgres']: postgres
    .toString()
    .replace('{{PORT}}', Math.floor(Math.random() * 999) + 8001),
  ['mongo']: mongo
    .toString()
    .replace('{{PORT}}', Math.floor(Math.random() * 999) + 8001),
};

export const config = {
  baseUrl: 'https://cluster.squaredev.io',
  auth: {
    auth: {
      username: 'admin',
      password: 'adminadmin',
    },
  },
  headers: (token) => ({
    headers: { Authorization: token },
  }),
  stack: (name, type) => ({
    name,
    spec: {
      compose: stack[type],
    },
  }),
};

// Get all stacks
export const getSwarmpitStacks = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { data } = await getStacks(token);
    res.send(data);
  },
);

export const getSwarmpitStacksByApps = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { data } = await getStacks(token);
    const apps = req.query.slug[2].split('+');

    const stacks = data.filter((stack) =>
      stack.services.find((service) => apps.includes(service.repository.name)),
    );
    res.send(stacks);
  },
);

export const createSwarmpitStack = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { name, type } = req.body;
    const { data } = await createStack(token, name, type);

    res.send(JSON.stringify('done'));
  },
);

export const deleteSwarmpitStackByName = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { name } = req.body;
    const { data } = await deleteStackByName(token, name);
    res.send(JSON.stringify('done'));
  },
);

// Service - Get access token
export const getAccessToken = async () => {
  const {
    data: { token },
  } = await axios.post(`${config.baseUrl}/login`, {}, config.auth);
  return token;
};

// Service - Get stacks
export const getStacks = async (token) => {
  return await axios.get(`${config.baseUrl}/api/stacks`, config.headers(token));
};

// Service - Create stack
export const createStack = async (token, name, type) => {
  return await axios.post(
    `${config.baseUrl}/api/stacks`,
    config.stack(name, type),
    config.headers(token),
  );
};

// Service - Delete stack
export const deleteStackByName = async (token, name) => {
  return await axios.delete(
    `${config.baseUrl}/api/stacks/${name}`,
    config.headers(token),
  );
};
