const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*(@codexjr.com.br)+$/
    },
    password: {
        type: String,
        required: true,
    },
    projetos: {
        type: [String],
        required: false,
    },
    adm: {
        type: Boolean,
        required: false,
        default: false
    },
    cargo: {
        type: String,
        required: false,
    },
    is_enable: {
        type: Boolean,
        required: false,
        default: false
    },
    code: {
        type: Number,
        required: false,
    },
    token_list: {
        type: [String]
    },
    id_fcm: {
        type: String,
        required: false,
        default: null
    }
},
    {
        timestamps: true,
    });

module.exports = model('User', UserSchema);