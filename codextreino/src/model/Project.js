const { Schema, model } = require('mongoose');
const User = require('@model/User');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    members: {
        type: [String],
        required: true,
    },
    finished: {
        type: Boolean,
        required: false,
        default: false
    },
},
    {
        timestamps: true,
    });

module.exports = model('Project', ProjectSchema);