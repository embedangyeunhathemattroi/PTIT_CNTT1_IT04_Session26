import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ======================================================
   1. ĐỊNH NGHĨA KIỂU DỮ LIỆU USER
   - Mỗi user sẽ có: id, tên, giới tính, ngày sinh, địa chỉ
====================================================== */
interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

/* ======================================================
   2. STATE BAN ĐẦU (INITIAL STATE)
   - Danh sách user mặc định
====================================================== */
const initialState: User[] = [
  {
    id: 1,
    userName: "Nguyễn Văn A",
    gender: "Nam",
    dateBirth: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Thị B",
    gender: "Nữ",
    dateBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
   {
    id: 3,
    userName: "Nguyễn Thị I",
    gender: "Nữ",
    dateBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

/* ======================================================
   3. TẠO SLICE CHO REDUX
   - createSlice giúp định nghĩa reducer và action
   - reducers: các hành động thay đổi state
====================================================== */
const userSlice = createSlice({
  name: "users", // tên state
  initialState,  // giá trị ban đầu
  reducers: {
    // Thêm user mới
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    // Xóa user theo id
    deleteUser: (state, action: PayloadAction<number>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    // Cập nhật user theo id
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

// Lấy các action ra để sử dụng
const { deleteUser, addUser } = userSlice.actions;

/* ======================================================
   4. TẠO STORE TOÀN CỤC
   - configureStore gom tất cả slice lại
====================================================== */
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

// Định nghĩa type cho useSelector (TypeScript)
type RootState = ReturnType<typeof store.getState>;

/* ======================================================
   5. COMPONENT HIỂN THỊ DANH SÁCH USER
   - Lấy dữ liệu từ store bằng useSelector
   - Dùng useDispatch để gọi action xóa
====================================================== */
 export function ListUser() {
  const users = useSelector((state: RootState) => state.users); // lấy state
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2>Danh sách User</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.userName}</td>
              <td>{u.gender}</td>
              <td>{u.dateBirth}</td>
              <td>{u.address}</td>
              <td>
                {/* Nút sửa (demo alert) */}
                <button onClick={() => alert("Sửa user " + u.id)}>Sửa</button>
                {/* Nút xóa */}
                <button onClick={() => dispatch(deleteUser(u.id))}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ======================================================
   6. COMPONENT GỐC PROFILE
   - Bao bọc ListUser trong Provider để dùng Redux
====================================================== */
export default function Profile() {
  return (
    <Provider store={store}>
      <ListUser />
    </Provider>
  );
}

/* ======================================================
   7. RENDER RA NGOÀI INDEX.HTML
   - Phải có <div id="root"></div> trong index.html
====================================================== */
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Profile />);
}
