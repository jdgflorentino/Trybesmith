import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();
const controller = new UsersController();

router.post('/users', controller.create);

export default router;