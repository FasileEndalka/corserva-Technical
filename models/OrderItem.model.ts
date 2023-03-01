import {Table, Column, Model, ForeignKey, BelongsTo, AllowNull} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
@Table({timestamps:true})
export class OrderItem extends Model<OrderItem> {
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id!:number;

    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
    })
    orderId!:number

    @Column({
        type: DataTypes.STRING(100),
        allowNull:false
    })
    itemName!: string

    @Column({
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    })
    price!: number

    @Column({
        type: DataTypes.INTEGER,
        allowNull: false,
    })
    quantity!: number

}