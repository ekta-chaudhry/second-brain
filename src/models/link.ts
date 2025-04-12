import mongoose, { Types } from "mongoose"

export interface Link {
    hash: string,
    userId: string
}

const LinkSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
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

export const LinkModel = new mongoose.Model('Link', LinkSchema);
