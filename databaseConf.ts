import { Sequelize } from "sequelize-typescript";
import { OrderItem } from "./models/orderItem.model";
require('dotenv').config()

export const sequelize = new Sequelize(process.env.DB_NAME ?? '', process.env.DB_USER ?? '', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    models: [OrderItem]
  });