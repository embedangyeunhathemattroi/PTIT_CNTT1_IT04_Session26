import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginNew() {
  const navigate = useNavigate();

  const validUser = {
    email: "test@gmail.com",
    password: "123456",
    role: "admin"
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.email === validUser.email &&
      formData.password === validUser.password &&
      formData.role === validUser.role
    ) {
      navigate("/account"); 
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">-- Chọn quyền --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
