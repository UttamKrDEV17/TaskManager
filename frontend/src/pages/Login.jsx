import { useState } from 'react';
import API from '../services/api';
import { useAuth } from '../context/Context';

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      console.log(res)
      login(res.data);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-16 bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Login</h2>
      <input
        placeholder="Email"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
