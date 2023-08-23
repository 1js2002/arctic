import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect("mongodb+srv://user:user@cluster0.7yi0evi.mongodb.net/?retryWrites=true&w=majority");
        console.log('connected to DB..');
    } catch(error) {
        console.log(error);
    }
};

export default connectDB;