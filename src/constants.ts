import dotenv from 'dotenv';
import { DBDetailsType } from './types';
dotenv.config();

export const __prod__ = process.env.NODE_ENV == 'production';
export const port = process.env.port || 2910;
export const dbDetails = JSON.parse(process.env.db_details as unknown as string) as unknown as DBDetailsType;
