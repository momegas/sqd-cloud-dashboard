import { hash } from 'bcrypt';
import { collections, validateBody } from '../app/services/apiUtils';
import nc from 'next-connect';

import joi from 'types-joi';

export const userCreateSchema = joi
  .object({
    username: joi.string().min(6).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .required();

export const signUp = nc().use(validateBody(userCreateSchema), async (req, res) => {
  const newUser = req.body;
  const userWithSameEmail = await collections.users.findOne({
    email: newUser.email,
  });

  if (userWithSameEmail) {
    return res.status(400).json({ error: 'A user with this email already exists' });
  }

  const user = {
    ...newUser,
    active: true,
    password: await hash(newUser.password, 10),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const { insertedId } = await collections.users.insertOne(user);
  const userDocument = await collections.users.findOne({
    _id: insertedId,
  });

  res.status(201).json(userDocument);
});
