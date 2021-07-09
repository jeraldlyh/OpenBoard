import connectDB from "../../../middleware/mongodb"
import User from "../../../models/user"
import type { NextApiRequest, NextApiResponse } from "next"
import mongoose from "mongoose"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req

    switch (method) {
        case "GET":
            try {
                const users = await User.find({
                    "root_id": {
                        $in: [mongoose.Types.ObjectId(body.id.toString())]
                    }
                })

                if (!users) {
                    return res.status(400).send("No user data found")
                }
                return res.status(200).send(users)
            } catch (error) {
                return res.status(500).send(error.message)
            }
            break

        case "POST":
            try {
                const response = await User.create(body)
                return res.status(201).send(response)
            } catch (error) {
                return res.status(500).send(error.message)
            }
    }
}

export default connectDB(handler)