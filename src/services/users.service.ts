import UsersModel from '../models/users.model';
import connection from '../models/connection';
import UsersInterface from '../interfaces/users.interface';
import getToken from '../middlewares/token';

export default class ProductsService { 
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: UsersInterface): Promise<string> => {
    const { username, password } = user;
    const token = getToken(username, password);
    await this.model.create(user);
    return token;
  };
}