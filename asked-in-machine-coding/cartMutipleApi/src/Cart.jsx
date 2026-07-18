import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const getProductsDetails = async () => {
    try {
      const resp = await fetch(`https://fakestoreapi.com/carts/1`);
      const cartDetails = await resp.json();
      console.log(cartDetails);
      const allProductsDetails = cartDetails?.products?.map(
        async (products) => {
          console.log(products);
          const resp = await fetch(
            `https://fakestoreapi.com/products/${products?.productId}`
          );
          const productDetails = await resp.json();
          return productDetails;
        }
      );
      const productDetailsResp = await Promise.all(allProductsDetails);
      console.log(productDetailsResp);
      setProducts(productDetailsResp);
    } catch (error) {
      console.log("Error in Fetching");
    }
  };

  useEffect(() => {
    getProductsDetails();
  }, []);

  return (
    <>
      <h2>Cart and Product Deatails</h2>
      {products?.map((products) => (
        <div
          style={{
            width: "350px",
            padding: "15px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.01)",
            border: "1px solid #f9f9f9",
          }}
        >
          <img src={products?.image} alt={products?.title} />
          <h2>{products?.title}</h2>
          <h4>{products?.price}</h4>
          <p>{products?.description}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
