import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const secret = process.env.JWT_SECRET || 'senha';

export default function getToken(username: string, password: string): string {
  const token = jwt.sign({
    data: { username, password },
  }, secret, options);
  return token;
}
