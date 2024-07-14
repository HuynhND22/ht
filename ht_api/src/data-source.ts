require('dotenv').config();
import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { Category } from './entities/category.entity';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Image } from './entities/image.entity';
import { Book } from './entities/book.entity';

import { checkCartsUnique } from './migrations/triggers/checkCartsUnique';
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
   // requestTimeout: 60000,
  // entities: ['entities/**/*.entity{.ts,.js}', 'entities/**/*.schema{.ts,.js}'],
  entities: [
    Category, 
    Post, 
    Image, 
    User, 
    Book
  ],
  synchronize: true,
  logging: true,
  dropSchema: true,
});
