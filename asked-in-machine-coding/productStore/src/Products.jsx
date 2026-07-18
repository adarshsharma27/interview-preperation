import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products?limit=10`);
    const productsListing = await resp.json();
    setProducts(productsListing || []);
  };
  console.log(products);
  return (
    <div>
      {products?.map((products) => (
        <div
          style={{
            padding: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            margin: "5px",
          }}
          key={products?.id}
          onClick={() => navigate(`/products/${products?.id}`)}
        >
          <img
            src={products?.image || ""}
            alt={products?.title || ""}
            style={{ height: "150px" }}
          />
          <h4>{products?.title || ""}</h4>
          <h5>{products?.price || ""}</h5>
          <p>{products?.description || ""}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
