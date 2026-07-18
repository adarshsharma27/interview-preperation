import React, { useState, useEffect } from "react";

const Profile = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState({});
  const getProducts = async () => {
    const resp = await fetch(`https://dummyjson.com/products`);
    const data = await resp.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = async (e) => {
    const id = e.target.value;
    const filterData = products?.filter(
      (products) => Number(products?.id) === Number(id)
    );
    setDetails(filterData);
    console.log(filterData);
  };

  return (
    <div className="container p-4">
      <div className=" my-2 shadow-lg border-1 border-gray-200  font-base px-4 bg-white">
        <select onChange={(e) => handleChange(e)}>
          {products?.map((products) => (
            <option value={products?.id}>{products?.title}</option>
          ))}
        </select>
      </div>

      <div className="shadow-lg f border-1 border-gray-200  font-base px-4 bg-white">
        <img src={details[0]?.thumbnail} alt="image" />
        <h3>{details[0]?.title}</h3>
        <h4>{details[0]?.price}</h4>
        <p>{details[0]?.description}</p>
      </div>
    </div>
  );
};

export default Profile;
