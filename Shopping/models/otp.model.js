const mongoose = require('mongoose');
const { Schema } = mongoose;

const OtpSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        create: {
            type: Date,
            default: Date.now,
            index: {
                expires: 20
            }
        }
    },
);

// Get item
OtpSchema.statics.findItemByQuery = function (query) {
    return this.findOne(query).sort({ created_at: 1 }).lean();
};

// Get list item
OtpSchema.statics.findItemsByQuery = function (query) {
    return this.find(query).sort({ created_at: 1 }).lean();
};

// Create item
OtpSchema.statics.createItemByQuery = function (query) {
    return this.create(query);
};

// Update
OtpSchema.statics.updateItemByQuery = function (id, query) {
    return this.findByIdAndUpdate(id, query, { new: true });
};

module.exports = mongoose.model('otps', OtpSchema);
