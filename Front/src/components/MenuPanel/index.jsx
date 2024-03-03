import React, { useContext, useEffect, useRef, useState } from "react";
import Scroll from "../Scroll";
import Mode from "../Mode";
import Cursor from "../Cursor";
import { UserContext } from "../../context/userContext";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function MenuPanel() {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");
  const { token, decode } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const myFileInput = useRef();
  const [filterData, setFilterData] = useState("");
  const [sort, setSort] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/category/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  function getAll() {
    fetch("http://localhost:3000/menuWithCategory")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }
  function handleSortChange(e) {
    setSort(e.target.value);
  }
  function handleFilter(e) {
    setFilterData(e.target.value);
  }

  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
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
      <div className="adminPanels">
        <div className="panels">
          <h3>
            <NavLink to={"/menuPanel"}>Menu</NavLink>
          </h3>
          <h3>
            <NavLink to={"/userPanel"}>User</NavLink>
          </h3>
        </div>
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

        <div className="selecSection">
          <div className="select">
            <select
              name="sortOptions"
              className="sortOptions"
              onChange={handleSortChange}
            >
              <option value="">FILTER</option>
              <option value="AtoZ">A to Z</option>
              <option value="ZtoA">Z to A</option>
              <option value="LowtoHigh">Low to High</option>
              <option value="HightoLow">High to Low</option>
            </select>
          </div>

          <div className="select">
            <select
              name="filterOptions"
              className="filterOptions"
              onChange={handleFilter}
            >
              <option value="">FILTER CATEGORY</option>
              <option value="starters">Starters</option>
              <option value="main">Main</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
        </div>

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
                  products

                    .filter((x) =>
                      x.categoryId.categoryName.includes(filterData)
                    )
                    .sort((a, b) => {
                      if (sort === "AtoZ") {
                        return lower(a.name) > lower(b.name) ? 1 : -1;
                      } else if (sort === "ZtoA") {
                        return lower(b.name) > lower(a.name) ? 1 : -1;
                      } else if (sort === "LowtoHigh") {
                        return a.price - b.price;
                      } else if (sort === "HightoLow") {
                        return b.price - a.price;
                      } else {
                        return 0;
                      }
                    })

                    .map((x) => (
                      <tr key={x._id}>
                        <td>
                          <Link to={"/shopDetail/" + x._id}>
                            <img src={x.image} alt="" />
                          </Link>
                        </td>
                        <td>{x.name}</td>
                        <td>${x.price}</td>
                        <td>{x.categoryId?.categoryName}</td>
                        <td>{x.ingredient}</td>
                        <td>{x.description}</td>
                        <td>
                          <Link to={`/menuEditPanel/${x._id}`}>
                            <button>Update</button>
                          </Link>
                        </td>
                        <td>
                          <button onClick={() => deleteById(x._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default MenuPanel;
