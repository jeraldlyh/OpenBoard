import User from "../../../../models/user"
import connectDB from "../../../../middleware/mongodb"
import type { NextApiRequest, NextApiResponse } from "next"
import mongoose from "mongoose"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { id }, method, body } = req

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
        // case "GET":
        //     try {
        //         const user = await User.findById(id)

        //         if (!user) {
        //             return res.status(400).send("No user data found")
        //         }
        //         return res.status(200).send(user)
        //     } catch (error) {
        //         return res.status(500).send(error.message)
        //     }
        //     break

        case "PUT":
            try {
                const user = await User.findByIdAndUpdate(id, body, {
                    new: true,                  // Returns updated document
                    runValidators: true         // Validate request body against schema
                })

                if (!user) {
                    return res.status(400).send("No such user exists")
                }
                return res.status(200).send(user)
            } catch (error) {
                return res.status(500).send(error.message)
            }
            break

        case "DELETE":
            try {
                const deletedUser = await User.deleteOne({ _id: id })
                
                if (!deletedUser) {
                    return res.status(400).send("No such user exists")
                }
                return res.status(204).send(deletedUser)
            } catch (error) {
                return res.status(500).send(error.message)
            }
            break
    }
}

export default connectDB(handler)