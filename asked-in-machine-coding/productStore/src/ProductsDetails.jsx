import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductsDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [productsDetails, setProductsDetails] = useState([]);
  useEffect(() => {
    getProducts();
  }, [id]);
  const getProducts = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await resp.json();
    setProductsDetails(product || {});
  };
  console.log(productsDetails);
  return (
    <div>
      <div
        style={{
          padding: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          margin: "5px",
        }}
        key={productsDetails?.id}
      >
        <img
          src={productsDetails?.image || ""}
          alt={productsDetails?.title || ""}
          style={{ height: "150px" }}
        />
        <h4>{productsDetails?.title || ""}</h4>
        <h5>{productsDetails?.price || ""}</h5>
        <p>{productsDetails?.description || ""}</p>
      </div>
    </div>
  );
};

export default ProductsDetails;
