import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;
const expiresIn = process.env.JWT_EXPIRES_IN as "1d";

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, secret, { expiresIn });
};
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Token inválido');
  }
};
