// B7.tsx
import React, { useState, useEffect } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap

// ---------------- Redux Slice ----------------
interface User {
  email: string;
  password: string;
}
interface AuthState {
  user: User | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null } as AuthState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { register } = authSlice.actions;

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

// ---------------- Register Component ----------------
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ email, password }));
    navigate("/login");
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "22rem" }}>
        <h3 className="text-center mb-4">Đăng ký</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

// ---------------- Login Component ----------------
function Login() {
  const registeredUser = useSelector((state: any) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (registeredUser) {
      setEmail(registeredUser.email);
      setPassword(registeredUser.password);
    }
  }, [registeredUser]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng nhập với: ${email} / ${password}`);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "22rem" }}>
        <h3 className="text-center mb-4">Đăng nhập</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

// ---------------- App Component ----------------
export default function B7() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
