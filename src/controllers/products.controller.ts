import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products.service';

export default class ProductsController { 
  constructor(private service = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.service.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  };
}