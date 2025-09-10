import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductDetails from "./components/B1";
import Student from "./components/B2";
import Login from "./components/B5/Login";
import PrivateRouter from "./components/B5/PrivateRouter";
import Account from "./components/B6/Account";
import LoginNew from "./components/B6/LoginNew";
import StudentSearch from "./components/B3";
import StudentName from "./components/B4";
import Teams from "./components/B7/Teams";
import TeamsIndex from "./components/B7/TeamsIndex";
import Team from "./components/B7/Team";
import LazyLoadComp from "./components/B8";
import About from "./components/B9/About";
import Contact from "./components/B9/Contact";
import Post from "./components/B9/Post";
import Headers from "./components/B9/Header";
import ListProduct from "./components/B10/ListProduct";
import ProductDetail from "./components/B10/ProductDetail";
import ProductDetails from "./components/B1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/student/:name" element={<Student />} />
         <Route path="/student" element={<StudentSearch />} />
         <Route path="/studentName" element={<StudentName/>} />
          <Route path="/login" element={<Login />} />
        <Route path="/account" element={<PrivateRouter  element={<Account></Account>}/>} />

        <Route path="/login" element={<LoginNew />} />
        <Route path="/account" element={<Account />} />

        <Route path="/teams" element={<Teams />} />
          <Route path="/teams" element={<TeamsIndex />} />
        <Route path=":teamId" element={<Team/>} />

         <Route path="/oadComp" element={<LazyLoadComp />} />
 
        <Route path="/" element={<h2>Trang chủ demo</h2>} />
        <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
           <Route path="/post" element={<Post />} />
              <Route path="/header" element={<Headers />} />


               <Route path="/products" element={<ListProduct />} />
          <Route path="/products/:id" element={< ProductDetail/>} />





      </Routes>
    </BrowserRouter>
  );
}
