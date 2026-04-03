import mongoose from "mongoose";

const userdataSchema = new mongoose.Schema({
    accountStatus : {
        type : String
    },
    address : {
        type : String
    },
    division : {
        type : String
    },
    email : {
        type : String
    },
    name : {
        type : String
    },
    password : {
        type : String
    },
    phoneNumber : {
        type : String
    }
})

const userdataModel = mongoose.model('userdata', userdataSchema)

export default userdataModel