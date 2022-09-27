const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
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
categorySchema.statics.findItemByQuery = function (query) {
    return this.findOne(query).sort({ created_at: 1 }).lean();
};

// Get list item
categorySchema.statics.findItemsByQuery = function (query) {
    return this.find(query).sort({ created_at: 1 }).lean();
};

// Create item
categorySchema.statics.createItemByQuery = function (query) {
    return this.create(query);
};

// Update
categorySchema.statics.updateItemByQuery = function (id, query) {
    return this.findByIdAndUpdate(id, query, { new: true });
};

module.exports = mongoose.model('categorys', categorySchema);
