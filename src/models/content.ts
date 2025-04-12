import mongoose, { Types } from "mongoose";
import { Tag } from "./tags";
import { ContentType } from "../types/content";

export interface Content {
    id: string;
    link?: string;
    type: ContentType;
    title: string;
    tags?: Tag[];
    userId: string;
}

const ContentSchema = new  mongoose.Schema (
    {
        link: {
            type: String,
            required: false,
        },
        type: {
            type: Number,
            enum: ContentType,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        tags: [
            {
                type: Types.ObjectId,
                ref: 'Tag'
            }
        ],
        userId: {
            type: Types.ObjectId,
            ref: 'User',
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

export const ContentModel = new mongoose.Model("Content", ContentSchema);