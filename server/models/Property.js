const { Schema, model, Types } = require('mongoose');

const propertySchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, 'Name must be atleast 4 characters long']
    },
    location: {
        type: String,
        required: true,
        minLength: [4, 'Location must be atleast 4 characters long']
    },
    area: {
        type: Number,
        required: true,
        min: [50, 'Area can\'t be less than 50']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, 'Invalid image URL']
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length > 10 && value.length < 200,
            message: 'Description must be between 10 and 200 characters long!'
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'Price must be a positive number']
    },
    currentBidder: {
        type: Types.ObjectId,
        ref: 'User'
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });



const Property = model('Property', propertySchema);

module.exports = Property;