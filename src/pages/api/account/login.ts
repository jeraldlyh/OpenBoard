import connectDB from "../../../../middleware/mongodb"
import Root from "../../../../models/root"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req

    if (method === "POST") {
        try {
            const query = {
                $and: [
                    {
                        username: {
                            $regex: body.username,
                        }
                    },
                    {
                        password: {
                            $regex: body.password
                        }
                    }
                ]
            }
            const root = await Root.findOne(query)
            if (root) {
                return res.status(200).send(root)
            }
            return res.status(401).end()
        } catch (error) {
            return res.status(500).send(error.messages)
        }
    }
}

export default connectDB(handler)