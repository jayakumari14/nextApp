import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.log("something went wrong",error);
        
    }
}