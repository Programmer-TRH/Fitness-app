import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        if(mongoose.connections[0].readyState){
            return true
        }
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(err){
        throw new Error("Couldn't connect to Mongodb")
    }
}

export default connectDB;