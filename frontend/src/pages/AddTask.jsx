import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', task);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add Task</h2>
      <input
        placeholder="Title"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
      >
        Create Task
      </button>
    </form>
  );
};

export default AddTask;
