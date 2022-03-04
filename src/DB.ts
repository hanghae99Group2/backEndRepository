import 'reflect-metadata';
import { createConnection } from 'typeorm';
import 'dotenv/config';

const env: string = process.env.NODE_ENV || '';

export const connectDB = createConnection({
  type: 'mysql',
  host: env === 'production' ? process.env.DB_HOST : 'localhost',
  port: env === 'production' ? parseInt(process.env.PORT as string) : 3306,
  username: env === 'production' ? process.env.DB_USER : 'root',
  password: env === 'production' ? process.env.DB_PASS : '1234',
  database: env === 'production' ? process.env.DB_NAME : 'test',
  entities: [__dirname + '/entity/*.ts', __dirname + '/entity/*.js'],
  synchronize: true,
  logging: true,
}).then(() => {
  console.log('DB connected');
});
