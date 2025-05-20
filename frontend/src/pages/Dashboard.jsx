import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Context';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.log(err)
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold transition"
        >
          Logout
        </button>
      </div>
      <button
        onClick={() => navigate('/add-task')}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition"
      >
        Add Task
      </button>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-4 rounded shadow"
          >
            <div>
              <strong className="text-lg text-gray-900">{task.title}</strong>
              <span className="block text-gray-600">{task.description}</span>
            </div>
            <div className="mt-2 sm:mt-0 flex gap-2">
              <button
                onClick={() => navigate(`/edit-task/${task._id}`)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition font-semibold"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No tasks found.</div>
      )}
    </div>
  );
};

export default Dashboard;
