import connectDB from "../../../../middleware/mongodb"
import Root from "../../../../models/root"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req

    if (method === "POST") {
        try {
            const root = new Root({
                name: body.name,
                firebaseId: body.firebaseId,
                preferences: []
            })
            const response = await root.save()
            return res.status(201).end()
        } catch (error) {
            console.log(error)
            return res.status(500).send(error.messages)
        }
    }
}

export default connectDB(handler)