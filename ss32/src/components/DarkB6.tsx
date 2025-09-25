// components/DarkModeToggle.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { toggleTheme, setTheme } from "../store";

export default function DarkModeToggle() {
  const dispatch: AppDispatch = useDispatch();

  // lấy mode từ Redux store
  const mode = useSelector((state: RootState) => state.theme.mode);

  // khi load trang, lấy theme đã lưu trong localStorage (nếu có)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  // mỗi khi mode thay đổi -> lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  // xử lý khi click checkbox
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{mode === "light" ? "Chế độ sáng" : "Chế độ tối"}</h2>
      <label>
        <input
          type="checkbox"
          checked={mode === "dark"}
          onChange={handleToggle}
        />
        Bật chế độ tối
      </label>
    </div>
  );
}
