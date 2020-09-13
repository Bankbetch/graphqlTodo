import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        surname: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
    },
    {
        collection: 'users',
    }
);

UserSchema.plugin(timestamps);

UserSchema.index({ createdAt: 1, updatedAt: 1 });
const customizationOptions = {

    typeConverterResolversOpts: {
        findMany: {
            sortHelperArgsOpts: {
                sortTypeName: 'name'
            }
        }

    }
};
export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User, customizationOptions);
