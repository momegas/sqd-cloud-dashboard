import fs from 'fs';
import nc from 'next-connect';
import { authenticateUser } from '../app/services/apiUtils';
import axios from 'axios';

const wpStack = fs.readFileSync('./stacks/wp-compose.yaml');

const randomPort = Math.floor(Math.random() * 999) + 8001;

export const config = {
  baseUrl: 'https://swarmpit.squaredev.io',
  auth: {
    auth: {
      username: 'admin',
      password: 'adminadmin',
    },
  },
  headers: (token) => ({
    headers: { Authorization: token },
  }),
  stack: (name) => ({
    name,
    spec: {
      compose: wpStack.toString().replace('{{PORT}}', randomPort),
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

export const createSwarmpitStack = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { name } = req.body;
    const { data } = await createStack(token, name);

    res.send('done');
  },
);

export const deleteSwarmpitStackByName = nc().use(
  authenticateUser(),
  async (req, res) => {
    const token = await getAccessToken();
    const { name } = req.body;
    const { data } = await deleteStackByName(token, name);
    res.send(data);
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
export const createStack = async (token, name) => {
  return await axios.post(
    `${config.baseUrl}/api/stacks`,
    config.stack(name),
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
