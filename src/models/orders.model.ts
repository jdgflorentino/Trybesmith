import { Pool } from 'mysql2/promise';
import OrdersInterface from '../interfaces/orders.interface';

export default class OrdersModel { 
  public connection: Pool;

  constructor(connection: Pool) { 
    this.connection = connection;
  }

  public async getAll(): Promise<OrdersInterface[]> { 
    const [rows] = await this.connection.execute(
      `SELECT orders.id, orders.userId, 
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products 
      ON orders.id = products.orderId
      GROUP BY orders.id
      ORDER BY orders.userId;`,
    );
    return rows as OrdersInterface[];
  }
}
