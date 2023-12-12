const mongoose = require("mongoose")

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log(`DB is connected at ${mongoose.connection.host}`)
    } catch (e) {
        console.log("Database Error", e)
    }
}