import mongoose from "mongoose";
import 'dotenv/config'


// Connect to MongoDB
export async function connect() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log(mongoose.connection.readyState == 1 ? "Connected to database" : "Failed to connect to database")
}

// Disconnect from MongoDB
export async function disconnect() {
    await mongoose.connection.close()
    console.log(mongoose.connection.readyState == 0 ? "Disconnected from database" : "Failed to disconnect from database")
}

export default { connect, disconnect }