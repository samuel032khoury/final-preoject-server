import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    role: {type: String, enum: ['ADMIN', 'USER']}
}, {collection: 'users'})

export default usersSchema