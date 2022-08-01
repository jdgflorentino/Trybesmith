import OrdersInterface from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';
import connection from '../models/connection';

export default class OrdersService { 
  public model: OrdersModel;

  constructor() { 
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<OrdersInterface[]> { 
    const orders = await this.model.getAll();
    return orders;
  }
}