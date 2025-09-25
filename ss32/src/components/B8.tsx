// import React, { useState } from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import "bootstrap/dist/css/bootstrap.min.css";

// // ---------------- Redux Slice ----------------
// interface AuthState {
//   currentUser: { email: string; password: string } | null;
// }

// const initialAuth: AuthState = {
//   currentUser: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuth,
//   reducers: {
//     login: (state, action) => {
//       state.currentUser = action.payload; // {email, password}
//     },
//     logout: (state) => {
//       state.currentUser = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// // ---------------- Store ----------------
// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });

// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = typeof store.dispatch;

// // ---------------- Login Component ----------------
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch<AppDispatch>();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//     alert("Đăng nhập thành công!");
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow-sm p-4" style={{ width: "22rem" }}>
//         <h3 className="text-center mb-4">Đăng nhập</h3>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <input
//               type="email"
//               placeholder="Nhập email..."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu..."
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Đăng nhập
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // ---------------- App Component ----------------
// function AppWrapper() {
//   const currentUser = useSelector((state: RootState) => state.auth.currentUser);

//   // ✅ Log thông tin user mỗi khi login
//   console.log("Thông tin đăng nhập:", currentUser);

//   return <Login />;
// }

// // ---------------- Root ----------------
// export default function B8() {
//   return (
//     <Provider store={store}>
//       <AppWrapper />
//     </Provider>
//   );
// }
