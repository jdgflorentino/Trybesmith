import { Pool, ResultSetHeader } from 'mysql2/promise';
import ProductsInterface from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: ProductsInterface): Promise<ProductsInterface> => {
    const { name, amount } = product;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    return { ...product, id };
  };

  public getAll = async (): Promise<ProductsInterface[]> => {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products;');
    return products as ProductsInterface[];
  };
}