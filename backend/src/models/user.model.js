import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        reuired: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });
// createdAT, updatedAt

export const User = mongoose.model("User", userSchema);