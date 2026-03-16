import mongoose, { Schema, Document } from "mongoose";
import { UserRole } from "../types/user.types.js";
import type { User as IUser} from "../types/user.types.js";

export interface UserDocument extends IUser, Document { }

const addressSchema = new Schema({
    street: { type: String },
    city: { type: String },
    zipCode: { type: String },
}, { _id: false })

const userSchema = new Schema<UserDocument>({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    age: { type: Number },
    role: {
        type: String,
        enum: Object.values(UserRole),
    },
    phone: { type: String },
    isActive: { type: Boolean },
    skills: { type: [String] },
    address: addressSchema,
}, { timestamps: true });

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
