import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();
const controller = new ProductsController();

router.post('/products', controller.create);
router.get('/products', controller.getAll);

export default router;