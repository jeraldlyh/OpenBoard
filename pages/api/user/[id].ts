import User from "../../../models/user"
import connectDB from "../../../middleware/mongodb"
import type { NextApiRequest, NextApiResponse } from "next"
import mongoose from "mongoose"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { id }, method } = req

    switch (method) {
        case "GET":
            try {
                const users = await User.find({
                    "root_id": {
                        $in: [mongoose.Types.ObjectId(id.toString())]
                    }
                })

                if (!users) {
                    return res.status(400).send("No user data found")
                }
                return res.status(200).send(users)
            } catch (error) {
                return res.status(500).send(error.message)
            }
    }
}

export default connectDB(handler)