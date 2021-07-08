import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import Product from "../../../models/product"
import productData from "../../../data/products.json"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const updatedData = _.map(productData, function (data) {
        return _.extend(data, {
            root_id: process.env.ROOT_ID,
        })
    })
    const response = await Product.insertMany(updatedData)
    return res.status(201).send(response)
}

export default connectDB(handler);