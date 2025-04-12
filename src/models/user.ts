import mongoose from "mongoose";

export interface User {
    id: string;
    username: string;
    password: string;
}

const UserSchema = new  mongoose.Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: function(doc, ret) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
              return ret;
            }
        }
    }
)

export const UserModel = new mongoose.Model("User", UserSchema);