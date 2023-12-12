const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
}, opts);

const UserModel =new mongoose.model("user",userSchema);

module.exports = UserModel;