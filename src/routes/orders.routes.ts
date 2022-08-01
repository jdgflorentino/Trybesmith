import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();
const controller = new OrdersController();

router.get('/orders', controller.getAll);

export default router;