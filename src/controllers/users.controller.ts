import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

export default class ProductsController { 
  constructor(private service = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.create(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}