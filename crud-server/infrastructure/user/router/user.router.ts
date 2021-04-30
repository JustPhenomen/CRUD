import { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers } from '../controller/user.controller';
import { isAuth } from '../../middlewares/is-auth';
import { attachCurrentUser } from '../../middlewares/attach-current-user';

const UserRouter = Router();

UserRouter.get('/:id', getUser);
UserRouter.get('/', isAuth, attachCurrentUser, getUsers);
UserRouter.post('/', createUser);
UserRouter.delete('/:id', deleteUser);

export { UserRouter };
