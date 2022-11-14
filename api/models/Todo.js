const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    Text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: false
    },
    Timestamp: {
        type: String,
        default: Date.now()
    }
});
const Todo = mongoose.model("Todo" , TodoSchema);
module.exports=Todo;