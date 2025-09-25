
import React from "react";
import { Provider, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// ----------------- Redux Slice -----------------
interface UserState {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: UserState = {
  id: 1,
  userName: "Nguyen Van A",
  gender: "Male",
  dateBirth: "2000-01-01",
  address: "Hà Nội, Việt Nam",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: { payload: Partial<UserState> }) => {
      return { ...state, ...action.payload };
    },
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

function ProfileComponent() {
  const user = useSelector((state: { user: UserState }) => state.user);


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Thông tin người dùng</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Tên:</b> {user.userName}</p>
      <p><b>Giới tính:</b> {user.gender}</p>
      <p><b>Ngày sinh:</b> {user.dateBirth}</p>
      <p><b>Địa chỉ:</b> {user.address}</p>
    </div>
  );
}

// ----------------- Export ra App để main.tsx render -----------------
export default function Profile() {
  return (
    <Provider store={store}>
      <ProfileComponent />
    </Provider>
  );
}
