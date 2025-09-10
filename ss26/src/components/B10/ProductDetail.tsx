import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const users = [
    { 
      id: 1, 
      name: "Điện Thoại Iphone 16PROMAX",
      price: "10.000.000", 
      image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png" 
    },
    { 
      id: 2, 
      name: "Điện Thoại OPPO RENO11 5G",
      price: "12.000.000", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot5A2oMCjLS6Rx3wGkF0b-DTEgB_YPnA5bg&s" 
    },
    { 
      id: 3, 
      name: "Điện Thoại NOKIA 8120 5G",
      price: "13.000.000", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbVEyOhlCqTfezY4LdEKVa_Cx64YYh0NL3w&s" 
    },
  ];

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>Sản phẩm không tồn tại!</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Thông tin chi tiết sản phẩm</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          width: "250px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <img 
          src={user.image} 
          alt={user.name} 
          style={{ width: "100%", height: "180px", objectFit: "contain" }} 
        />
        <p><b>ID:</b> {user.id}</p>
        <p><b>Tên:</b> {user.name}</p>
        <p><b>Giá:</b> {user.price}</p>

        <Link to="/products">
          <button 
            style={{ 
              marginTop: "10px", 
              padding: "5px 10px", 
              background: "blue", 
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Quay lại danh sách
          </button>
        </Link>
      </div>
    </div>
  );
}
