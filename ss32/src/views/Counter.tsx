import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
  // Lấy state từ Redux store
  // state ở đây chính là giá trị mà reducer trả về
  const result = useSelector((state: any) => state);

  // Hook để gọi action tới reducer
  const dispatch = useDispatch();

  // Hàm random số ngẫu nhiên từ 1 đến 1000
  const handleRandom = () => {
    dispatch({
      type: "random",                      // Action type mà reducer sẽ xử lý
      payload: Math.ceil(Math.random() * 1000), // Giá trị random được gửi kèm
    });
  };

  return (
    <div>
      {/* Hiển thị giá trị hiện tại từ state */}
      <h2>Counter: {result}</h2>

      {/* Khi bấm nút sẽ dispatch action random */}
      <button onClick={handleRandom}>Random</button>
    </div>
  )
}
