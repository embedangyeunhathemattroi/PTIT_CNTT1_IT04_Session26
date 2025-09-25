import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Import slices
import { increment, decrement, reset } from "./features/counterSlice";
import { generateRandomNumbers } from "./features/randomSlice";
import { toggleTheme } from "./features/themeSlice";
import { toggleView, setListView, setGridView } from "./features/viewSlice";
import { toggleMenu } from "./features/menuSlice";
import { setEnglish, setVietnamese, toggleLanguage } from "./features/languageSlice";

// Import icon từ Ant Design
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";

const sampleData = [
  { id: 1, name: "Sản phẩm A" },
  { id: 2, name: "Sản phẩm B" },
  { id: 3, name: "Sản phẩm C" },
  { id: 4, name: "Sản phẩm D" },
];

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Redux state
  const count = useSelector((state: RootState) => state.counter.value);
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const viewMode = useSelector((state: RootState) => state.view.mode);
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const lang = useSelector((state: RootState) => state.language.lang);

  // Text theo ngôn ngữ
  const texts = {
    en: {
      title: "Rikkei Academy",
      choose: "Choose language",
      english: "English",
      vietnamese: "Vietnamese",
      counter: "Counter App",
      increase: "Increase",
      decrease: "Decrease",
      reset: "Reset",
      randomTitle: "Generate Random Numbers",
      randomBtn: "Random number",
      themeLight: "🌞 Light Theme",
      themeDark: "🌙 Dark Theme",
      toggleTheme: "Toggle theme",
      viewTitle: "Change display mode",
      list: "List",
      grid: "Grid",
      toggle: "Toggle",
    },
    vi: {
      title: "Học viện Rikkei",
      choose: "Chọn ngôn ngữ",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt",
      counter: "Ứng dụng Đếm số",
      increase: "Tăng",
      decrease: "Giảm",
      reset: "Đặt lại",
      randomTitle: "Tạo danh sách số ngẫu nhiên",
      randomBtn: "Sinh số ngẫu nhiên",
      themeLight: "🌞 Giao diện Sáng",
      themeDark: "🌙 Giao diện Tối",
      toggleTheme: "Đổi giao diện",
      viewTitle: "Chế độ hiển thị dữ liệu",
      list: "Danh sách",
      grid: "Lưới",
      toggle: "Đổi chế độ",
    },
  };

  // Styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      backgroundColor: themeMode === "light" ? "#ffffff" : "#121212",
      color: themeMode === "light" ? "#000000" : "#ffffff",
      transition: "all 0.3s ease-in-out",
    },
    mainContent: {
      flex: 1,
      padding: "30px",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
    },
    section: {
      margin: "20px 0",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      width: "450px",
      textAlign: "center" as const,
      backgroundColor: themeMode === "light" ? "#f9f9f9" : "#1e1e1e",
    },
    button: {
      padding: "10px 20px",
      margin: "5px",
      cursor: "pointer",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
    },
    listItem: {
      background: "tomato",
      color: "#000",
      margin: "10px 0",
      padding: "20px",
      textAlign: "center" as const,
      borderRadius: "8px",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
    },
    gridItem: {
      background: "tomato",
      color: "#000",
      padding: "20px",
      textAlign: "center" as const,
      borderRadius: "8px",
    },
  };

  // Menu items
  const menuItems = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <BarChartOutlined />, label: "Thống kê" },
    { icon: <FileTextOutlined />, label: "Tài liệu" },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar menu */}
      <div
        style={{
          width: collapsed ? "80px" : "220px",
          minHeight: "100vh",
          background: "#001529",
          color: "white",
          transition: "all 0.3s",
          padding: "10px",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            {item.icon}
            {!collapsed && <span style={{ marginLeft: "10px" }}>{item.label}</span>}
          </div>
        ))}

        {/* Nút thu gọn */}
        <div
          style={{ marginTop: "20px", cursor: "pointer", padding: "12px" }}
          onClick={() => dispatch(toggleMenu())}
        >
          <LeftOutlined /> {!collapsed && "Thu gọn"}
        </div>
      </div>

      {/* Nội dung chính */}
      <div style={styles.mainContent}>
        {/* 1. Counter */}
        <div style={styles.section}>
          <h2>{texts[lang].counter}</h2>
          <h3>{count}</h3>
          <div>
            <button style={styles.button} onClick={() => dispatch(increment())}>
              {texts[lang].increase}
            </button>
            <button style={styles.button} onClick={() => dispatch(decrement())}>
              {texts[lang].decrease}
            </button>
            <button style={styles.button} onClick={() => dispatch(reset())}>
              {texts[lang].reset}
            </button>
          </div>
        </div>

        {/* 2. Random Number */}
        <div style={styles.section}>
          <h2>{texts[lang].randomTitle}</h2>
          <button
            style={styles.button}
            onClick={() => dispatch(generateRandomNumbers())}
          >
            {texts[lang].randomBtn}
          </button>
          {numbers.length > 0 ? (
            <p>
              <strong>List number:</strong> [{numbers.join(", ")}]
            </p>
          ) : (
            <p>Chưa có số nào. Hãy nhấn nút để tạo!</p>
          )}
        </div>

        {/* 3. Dark/Light Theme */}
        <div style={styles.section}>
          <h2>{themeMode === "light" ? texts[lang].themeLight : texts[lang].themeDark}</h2>
          <button style={styles.button} onClick={() => dispatch(toggleTheme())}>
            {texts[lang].toggleTheme}
          </button>
        </div>

        {/* 4. List/Grid View */}
        <div style={styles.section}>
          <h2>{texts[lang].viewTitle}</h2>
          <div>
            <button style={styles.button} onClick={() => dispatch(setListView())}>
              {texts[lang].list}
            </button>
            <button style={styles.button} onClick={() => dispatch(setGridView())}>
              {texts[lang].grid}
            </button>
            <button style={styles.button} onClick={() => dispatch(toggleView())}>
              {texts[lang].toggle}
            </button>
          </div>

          {viewMode === "list" ? (
            <div>
              <h3>📋 {texts[lang].list}</h3>
              {sampleData.map((item) => (
                <div key={item.id} style={styles.listItem}>
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3>🔲 {texts[lang].grid}</h3>
              <div style={styles.gridContainer}>
                {sampleData.map((item) => (
                  <div key={item.id} style={styles.gridItem}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 5. Đổi ngôn ngữ */}
        <div style={styles.section}>
          <h2>{texts[lang].choose}</h2>
          <button style={styles.button} onClick={() => dispatch(setVietnamese())}>
            {texts[lang].vietnamese}
          </button>
          <button style={styles.button} onClick={() => dispatch(setEnglish())}>
            {texts[lang].english}
          </button>
          <button style={styles.button} onClick={() => dispatch(toggleLanguage())}>
            🔄 Toggle
          </button>

          <h1 style={{ marginTop: "20px" }}>{texts[lang].title}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
