import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {   // Searches for existing connections
        return handler(req, res)
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    console.log("Connected to a new database instance")
    return handler(req, res)
}
// const connection = {}

// const connectDB = async () => {
//     if (connection.isConnected) {
//         return
//     }

//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     connection.isConnected = db.connections[0].readyState
// }

export default connectDB