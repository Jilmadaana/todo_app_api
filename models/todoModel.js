const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
        required:true
    },
    endDate:{
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('todoModel', todoSchema);