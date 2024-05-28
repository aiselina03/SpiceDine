import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";

function MenuEditpanel() {
  const { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");
  const myFileInput = useRef();

  useEffect(() => {
    fetch("http://localhost:3000/category/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    if (!decode || decode.role !== "admin") {
      window.location.href = "/";
    } else {
      getProduct(id);
    }
  }, [decode, id]);

  async function getProduct(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const productData = await response.json();
      setName(productData.name);
      setPrice(productData.price);
      setCategoryId(productData.categoryId.categoryName);
      setIngredient(productData.ingredient);
      setDescription(productData.description);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("ingredient", ingredient);
    formData.append("description", description);

    const data = await fetch(`http://localhost:3000/api/menu/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (data.ok) {
      window.location.href = "/menuPanel";
    }
    console.log("Product updated successfully");
  }
  return (
    <>
      <div className="account">
        <p>
          <Link to={"/menuPanel"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          Menu Update Panel
        </p>
      </div>
      <div className="menuUpdatePanel">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            ref={myFileInput}
            className="noneInput"
          />
          <div
            className="upload"
            onClick={() => {
              myFileInput.current.click();
            }}
          >
            <i className="fa-solid fa-upload"></i> <span>Update Image</span>
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Price"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <select
            className="categoryName"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value=""> Category</option>
            {category.map((item) => (
              <option key={item._id} value={item._id}>
                {item.categoryName}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Ingredient"
          />

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <br />
          <button type="submit">Update Product</button>
        </form>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default MenuEditpanel;
