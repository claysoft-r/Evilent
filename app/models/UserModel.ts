import mongoose, { Schema, Document, Model } from 'mongoose';

interface UserDoc extends Document {
    user_id: string;
    email: string;
    password: string;
    salt: string;
    phone: string;
    userType:string;
};

const UserSchema = new Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
    salt: { type: String, required: true},
    phone: { type: String, required: true},
    userType: { type: String, default: 'COMPRADOR'},
}, {
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;

        }
    },
    timestamps: true
});

const UserModel = mongoose.model<UserDoc>('usuario', UserSchema);

export { UserModel };

