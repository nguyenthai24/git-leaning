const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        sorting: {
            type: Number,
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
pageSchema.statics.findItemByQuery = function (query) {
    return this.findOne(query).sort({ created_at: 1 }).lean();
};

// Get list item
pageSchema.statics.findItemsByQuery = function (query) {
    return this.find(query).sort({ created_at: 1 }).lean();
};

// Create item
pageSchema.statics.createItemByQuery = function (query) {
    return this.create(query);
};

// Update
pageSchema.statics.updateItemByQuery = function (id, query) {
    return this.findByIdAndUpdate(id, query, { new: true });
};

module.exports = mongoose.model('pages', pageSchema);
