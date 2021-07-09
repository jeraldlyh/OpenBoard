import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import ForumPost from "../../../models/forumPost"
import faker from "faker"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const forumPost = new ForumPost({
        root_id: "60e6b39f51e0963eb878271b",
        user_id: "60e6b9b845132f42571f3ac2",
        description: faker.lorem.paragraph(),
        likes: faker.datatype.number(),
        postDateTime: faker.time.recent(),
        comments: [{
            user_id: "60e6b9b845132f42571f3ac3",
            comment: faker.lorem.sentence(),
            commentDateTime: faker.time.recent(),
        }]
    })
    const response = await forumPost.save()
    return res.status(201).send(response)
}

export default connectDB(handler);