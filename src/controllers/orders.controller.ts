import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

export default class OrdersController { 
  constructor(private service: OrdersService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(StatusCodes.OK).json(orders);
  };
}