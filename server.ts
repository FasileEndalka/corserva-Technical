import express from 'express'
import {sequelize} from './databaseConf'
import orderItemRouter from './routes/orderItem.route'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())
app.use("/sales",orderItemRouter)

sequelize.sync().then(() => {
    console.log('DB Connected......')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})