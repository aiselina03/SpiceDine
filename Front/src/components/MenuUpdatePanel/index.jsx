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
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");
  const myFileInput = useRef();

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
      setCategoryId(productData.categoryId);
      setIngredient(productData.ingredient);
      setDescription(productData.description);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (decode && decode.role === "admin"){
          try {
      const response = await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          price,
          categoryId,
          ingredient,
          description,
        }),
      });
      if (response.ok) {
        window.location.href = "/menuPanel";
      }
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
    }
    }

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
        <form action="#" onSubmit={handleSubmit} className="form">
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

          <input
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            placeholder="Category ID"
          />

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



