import mongoose, { Schema } from "mongoose";

const packageSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        oldPrice: {
            type: Number,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent compiling the model if it already exists in the cache
const Package =
    mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Package;
