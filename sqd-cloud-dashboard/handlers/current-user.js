import nc from 'next-connect';
import { authenticateUser } from '../app/services/apiUtils';

export const currentUser = nc().use(authenticateUser(), (req, res) => {
  const user = { ...JSON.parse(req.env.user) };
  res.status(200).json(user);
});
