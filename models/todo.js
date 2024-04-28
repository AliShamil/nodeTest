const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, reqired: true },
    desc: { type: String, reqired: true },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;