const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'categorys',
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

// Get item
ProductSchema.statics.findItemByQuery = function (query) {
    return this.findOne(query).sort({ created_at: 1 }).lean();
};

// Get list item
ProductSchema.statics.findItemsByQuery = function (query) {
    return this.find(query).sort({ created_at: 1 }).lean();
};

// Create item
ProductSchema.statics.createItemByQuery = function (query) {
    return this.create(query);
};

// Update
ProductSchema.statics.updateItemByQuery = function (id, query) {
    return this.findByIdAndUpdate(id, query, { new: true });
};

module.exports = mongoose.model('products', ProductSchema);
