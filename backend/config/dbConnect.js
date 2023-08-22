import mongoose, { mongo } from 'mongoose';

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return 
    }

    mongooose.connect(process.env.MONGO_URI)
}

export default dbConnect;