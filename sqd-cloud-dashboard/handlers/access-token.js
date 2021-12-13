import { compare } from 'bcrypt';
import { collections, validateBody } from '../app/services/apiUtils';
import { sign } from 'jsonwebtoken';
import nc from 'next-connect';
import joi from 'types-joi';

const userCredentialsSchema = joi
  .object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .required();

export const accessToken = nc().use(validateBody(userCredentialsSchema), async (req, res) => {
  const { email, password } = req.body;

  const user = await collections.users.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({ error: 'Invalid email' });
  }

  if (!(await compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
  const mins60 = Math.floor(Date.now() / 1000) + 60 * 60;
  const data = { exp: mins60, data: user };
  const token = sign(data, process.env.SECRET_KEY);

  res.status(200).json({ token });
});
