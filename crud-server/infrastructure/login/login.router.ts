import { Router } from 'express';
import { loginUser } from './login.controller';

const LoginRouter = Router();

LoginRouter.post('/', loginUser);

export { LoginRouter };
