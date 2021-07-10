import _ from "lodash"
import connectDB from "../../../../middleware/mongodb"
import Root from "../../../../models/root"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            const root = new Root(req.body)
            const response = await root.save()
            return res.status(201).send(response)
        } catch (error) {
            return res.status(500).send(error.messages)
        }
    }
}

export default connectDB(handler)