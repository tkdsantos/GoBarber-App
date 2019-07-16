import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Daniel Santos',
    email: 'tkdsantos@gmail.com',
    password_hash: '1234562227',
  });

  return res.json(user);
});

export default routes;
