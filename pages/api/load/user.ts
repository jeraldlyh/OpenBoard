import _ from "lodash"
import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../middleware/mongodb"
import User from "../../../models/user"
import faker from "faker"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const user = new User({
        root_id: "60e6b39f51e0963eb878271b",
        registeredDateTime: faker.time.recent(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        bio: faker.lorem.sentence(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        mobileNumber: "91234567",
        socials: {
            website: "",
            github: "",
            twitter: "",
            instagram: "",
            facebook: ""
        }
    })
    const response = await user.save()
    return res.status(201).send(response)
}

export default connectDB(handler)