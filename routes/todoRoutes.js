const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo)
    } catch (err) {
        res.status(404).json({ message: "Todo not found!" });
    }
});

router.post("/", async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        desc: req.body.desc
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        req.status(404).json({ message: "Todo not found" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const status = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            desc: req.body.desc
        });
        res.json(status ? "Successfully Updated!" : "error happened");
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;