const { mongoose, Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

// Get item
UserSchema.statics.findItemByQuery = function (query) {
    return this.findOne(query).sort({ created_at: 1 }).lean();
};

// Get list item
UserSchema.statics.findItemsByQuery = function (query) {
    return this.find(query).sort({ created_at: 1 }).lean();
};

// Create item
UserSchema.statics.createItemByQuery = function (query) {
    return this.create(query);
};

// Update
UserSchema.statics.updateItemByQuery = function (id, query) {
    return this.findByIdAndUpdate(id, query, { new: true });
};

module.exports = mongoose.model('users', UserSchema);
