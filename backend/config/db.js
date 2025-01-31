import mongoose from "mongoose";

export const connectDB = async()=> {

    await mongoose.connect('mongodb+srv://tamilselvancs2020:Tamil12345@cluster0.kovnz.mongodb.net/Aquarium').
    then(()=>console.log("DB Connected"))
}