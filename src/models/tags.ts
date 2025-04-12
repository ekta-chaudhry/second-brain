import mongoose from "mongoose";

export interface Tag {
    id: string;
    title: string;
}

const TagSchema = new  mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
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

export const TagModel = new mongoose.Model("Tag", TagSchema);