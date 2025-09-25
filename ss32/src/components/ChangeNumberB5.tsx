// components/ChangeState.tsx
import React from "react";
// import các hook của react-redux để kết nối React với Redux
import { useDispatch, useSelector } from "react-redux";
// import type của RootState và AppDispatch để có type an toàn khi dùng với TypeScript
import { RootState, AppDispatch } from "../store";
// import action creator changeCompany từ slice company
import { changeCompany } from "../store";
export default function ChangeState() {
  // lấy hàm dispatch từ Redux, có kiểu AppDispatch để an toàn
  const dispatch: AppDispatch = useDispatch();

  // lấy giá trị state.company.value từ store Redux
  // RootState là kiểu toàn bộ state trong store
  const company = useSelector((state: RootState) => state.company.value);

  // hàm xử lý khi click vào button
  const handleChange = () => {
    // gọi action changeCompany để cập nhật state trong Redux
    dispatch(changeCompany());
  };

  return (
    <div>
      {/* hiển thị giá trị company ra giao diện */}
      <h2>Company: {company}</h2>

      {/* khi click button sẽ chạy handleChange */}
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
