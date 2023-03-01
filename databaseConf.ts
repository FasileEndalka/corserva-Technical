import { Sequelize } from "sequelize-typescript";
import { OrderItem } from "./models/orderItem.model";

export const sequelize = new Sequelize({
    database:'salesDB',
    dialect:'postgres',
    host:'localhost',
    port: 5432,
    username:'fasile',
    password:'postgres',
    models:[OrderItem]
})