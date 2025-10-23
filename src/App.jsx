import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Login from "./pages/member/Login";
import Register from "./pages/member/Register";
import AddProduct from "./pages/product/AddProduct";
import ManageProduct from "./pages/product/ManageProduct";
import ModifyProduct from "./pages/product/ModifyProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 導覽列 */}
      <NavBar />

      {/* 路由設定 */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/manage" element={<ManageProduct />} />
        <Route path="/product/modify" element={<ModifyProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
