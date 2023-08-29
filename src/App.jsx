import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    navigate('/login');
  }
  return (
    <button type='button' onClick={logoutHandle}>登出</button>
  )
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<>這是首頁</>} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
