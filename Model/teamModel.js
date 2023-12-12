const mongoose = require("mongoose");

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
const teamSchema = new mongoose.Schema({
    teamname: {
        type: String,
        unique: true,
        required: true
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }]

}, opts);

const TeamModel = new mongoose.model("team", teamSchema);

module.exports = TeamModel;