import ProductsInterface from '../interfaces/products.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

export default class ProductsService { 
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: ProductsInterface): Promise<ProductsInterface> => {
    const result = await this.model.create(product);
    return result;
  };
}