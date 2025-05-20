import Task from '../models/Task.js';

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, user: req.userId });
    res.status(201).json(task);
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to create task' });
  }
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.userId });
  task ? res.json(task) : res.status(404).json({ message: 'Not found' });
};

export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  task ? res.json(task) : res.status(404).json({ message: 'Not found' });
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  task ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
};
