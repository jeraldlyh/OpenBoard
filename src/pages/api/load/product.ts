import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../../middleware/mongodb"
import Product from "../../../../models/product"
import faker from "faker"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await Product.create({
        root_id: "60e6b39f51e0963eb878271b",
        category: faker.commerce.department(),
        products: [
            {
                name: faker.commerce.productName(),
                price: faker.datatype.number(),
                quantity: faker.datatype.number(),
                imageURL: faker.image.imageUrl()
            },
            {
                name: faker.commerce.productName(),
                price: faker.datatype.number(),
                quantity: faker.datatype.number(),
                imageURL: faker.image.imageUrl()
            },
        ]
    })
    return res.status(201).send(response)
}

export default connectDB(handler);