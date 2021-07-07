import connectDB from "../../middleware/mongodb"
import User from "../../models/user"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const users = await User.find({})
        const test = new User({"name": "Felice"})
        test.save().then(response: object => console.log(response))

        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export default connectDB(handler);