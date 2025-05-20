import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/edit-task/:id" element={<EditTask />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
