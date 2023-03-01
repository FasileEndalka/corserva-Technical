import express,{Request, Response} from "express";
import {OrderItem} from "../models/orderItem.model"
import Joi from 'joi'

const router = express.Router()

const orderItemSchema = Joi.object({
    orderId: Joi.number().required(),
    itemName:Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()

})

router.get("/", async(req: Request, res:Response) => {
    const orderItems = await OrderItem.findAll()
  
    res.send(orderItems)
});

router.get('/:id', async (req:Request, res:Response) => {
    const orderItems = await OrderItem.findByPk(req.params.id)
    if(!orderItems) return res.status(400).send(`Item not found by this ${req.params.id}  `)
    res.send(orderItems)
})

router.delete('/:id', async (req, res) => {
    const orderItems = await OrderItem.findByPk(req.params.id)

    if(!orderItems) return res.status(404).send(`item mot found by this id: ${req.params.id}`)

    await orderItems.destroy()

    res.send('item has been deleted!')
})

router.post('/', async (req:Request, res: Response) => {
    const {error, value} = orderItemSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const items = await OrderItem.create(value)
    res.send(items)
})

router.put("/:id", async (req:Request, res: Response ) => {
    const {error, value} = orderItemSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const item = await OrderItem.findByPk(req.params.id)

    if(!item){
        return res.status(404).send('Item not found!')
    }
    const {itemName, orderId, quantity, price} = req.body
    
    item.itemName = itemName
    item.orderId = orderId
    item.quantity = quantity
    item.price = price
    await item.save()
    res.send(item)
})

export default router

