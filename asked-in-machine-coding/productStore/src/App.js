import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./Products";
import ProductsDetails from "./ProductsDetails";
import Home from "./Home";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route index path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsDetails />} />
    </Routes>
  );
}
