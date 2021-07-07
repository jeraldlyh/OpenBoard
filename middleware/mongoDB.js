import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {   // Searches for existing connections
        return handler(req, res)
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    return handler(req, res)
}

export default connectDB