import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Task Manager</h1>
        <p className="text-gray-600 mb-8">Organize your day, track tasks, and stay productive.</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-blue-600 border border-blue-600 rounded-xl transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
