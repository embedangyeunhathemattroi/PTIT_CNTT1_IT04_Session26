import { Link, useSearchParams } from "react-router-dom";
import { useState, ChangeEvent } from "react";

export default function ListProduct() {
  const users = [
    {
      id: 1,
      name: "Điện Thoại Iphone 16PROMAX",
      price: "10.000.000",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png",
    },
    {
      id: 2,
      name: "Điện Thoại OPPO RENO11 5G",
      price: "12.000.000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot5A2oMCjLS6Rx3wGkF0b-DTEgB_YPnA5bg&s",
    },
    {
      id: 3,
      name: "Điện Thoại NOKIA 8120 5G",
      price: "13.000.000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbVEyOhlCqTfezY4LdEKVa_Cx64YYh0NL3w&s",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({
      name: searchText,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Danh sách sản phẩm</h1>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        placeholder="Nhập điện thoại cần tìm"
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Tìm kiếm</button>

      <p>
        Máy vừa tìm kiếm: <b>{searchParams.get("name")}</b>
      </p>

      {/* Danh sách sản phẩm */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "220px",
              textAlign: "center",
            }}
          >
            <img
              src={user.image}
              alt={user.name}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />
            <p><b>ID:</b> {user.id}</p>
            <p><b>Tên:</b> {user.name}</p>
            <p><b>Giá:</b> {user.price}</p>
            <Link to={`/products/${user.id}`}>
              <button style={{ background: "blue", color: "white",}}>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
