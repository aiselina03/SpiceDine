import React, { useContext, useEffect, useRef, useState } from "react";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { UserContext } from "../../context/userContext";
import "./style.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function MenuPanel() {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");
  const { token, decode } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const myFileInput = useRef();

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3000/menuWithCategory")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
         setIsLoading(false);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryName);
    formData.append("ingredient", ingredient);
    formData.append("description", description);

    const data = await fetch("http://localhost:3000/api/menu/", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    getAll();
  }

  async function deleteById(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3000/api/menu/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getAll();
    }
  }

  return (
    <>
          <Helmet>
        <title>SpiceDine</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="account">
        <p>
          <Link to={"/adminPanel"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          Menu Panel
        </p>
      </div>
      <div className="menuPanel">
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
            <i className="fa-solid fa-upload"></i> <span>Add Image</span>
          </div>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button>Add Product</button>
        </form>
        <div className="table">
        {isLoading ? (
              <div className="loaderCenterCards">
                <div className="loader">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>CategoryName</th>
                <th>Ingredient</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((x) => (
                  <tr key={x._id}>
                    <td>
                      <img src={x.image} alt="" />
                    </td>
                    <td>{x.name}</td>
                    <td>${x.price}</td>
                    <td>{x.categoryId?.categoryName}</td>
                    <td>{x.ingredient}</td>
                    <td>{x.description}</td>
                    <td>
                    <Link to={`/menuEditPanel/${x._id}`}><button>Update</button></Link>
                    </td>
                    <td>
                      <button onClick={() => deleteById(x._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>)}
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default MenuPanel;
