import { Router } from 'express';
import { registerUser } from '../controllers/register.controller';

const RegisterRouter = Router();

RegisterRouter.post('/', registerUser);

export { RegisterRouter };
