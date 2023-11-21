const { Schema, model, Types } = require('mongoose');

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 1 && value <= 5,
            message: 'Rating must be a number between 1 and 5'
        }
    },
    content: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length >= 20 && value.length <= 200,
            message: 'The review content must be between 20 and 200 characters long'
        }
    },
    _ownerId:{
        type: Types.ObjectId,
        ref:'User'
    },
    _propertyId:{
        type: Types.ObjectId,
        ref:'Property'
    }
}, { timestamps: true });

const Review = model('Review', reviewSchema);

module.exports = Review;