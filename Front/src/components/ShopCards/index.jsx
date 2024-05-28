import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function ShopCards() {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [sort, setSort] = useState(null);
  const [input, setInput] = useState("");
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [productsPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastProducts = currentPage * productsPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPage;
  const currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  useEffect(() => {
    fetch("http://localhost:3000/menuWithCategory/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  function handleFilter(categoryName) {
    setFilterData(categoryName);
  }

  function search(e) {
    setInput(e.target.value);
  }

  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }

  function handleSortChange(e) {
    setSort(e.target.value);
  }

  return (
    <>
      <div className="cardsPages">
        <div className="cardsPage">
          <div className="shopFilter">
            <div className="search">
              <i className="fa-light fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={search}
              />
            </div>
            <div className="filterCategories">
              <div className="head">
                <h2>CATEGORIES</h2>
              </div>
              <div className="filter">
                <button onClick={() => handleFilter("")}> All Menu</button>
                <button onClick={() => handleFilter("starters")}>
                  Starters
                </button>
                <button onClick={() => handleFilter("main")}>Main</button>
                <button onClick={() => handleFilter("dessert")}>Dessert</button>
                <button onClick={() => handleFilter("drinks")}> Drinks</button>
              </div>
            </div>
            <div className="recentProducts">
              <div className="head">
                <h2>RECENT PRODUCTS</h2>
              </div>
              <div className="recent">
                <div className="item">
                  <div className="img">
                    <img src="/src/images/cart-item-1.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h4>$32.00</h4>
                    <p>Salad Dessert</p>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/src/images/cart-item-2.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h4>$25.00</h4>
                    <p>Orange Twist</p>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/src/images/cart-item-3.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h4>$14.00</h4>
                    <p>Lasagna Salad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shop">
            <div className="selecSection">
              <div className="length">
                <p>Showing all {currentProducts.length} results</p>
              </div>
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
            </div>
            {isLoading ? (
              <div className="loaderCenterCards">
                <div className="loader">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
              <div className="shopCards">
                {currentProducts
                  .filter((x) =>
                    x.name.toLowerCase().includes(input.toLowerCase())
                  )
                  .filter((x) => x.categoryId.categoryName.includes(filterData))
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
                    <div className="shopCard" key={x._id}>
                      <div className="image">
                        <img src={x.image} alt="" />
                        <div className="hover">
                          <div
                            className="cart-shopping"
                            onClick={() => {
                              decode ? addBasket(x) : navigate("/login");
                            }}
                          >
                            <i className="fa-light fa-cart-shopping"></i>
                          </div>
                          <div
                            className="heart"
                            onClick={() => {
                              decode
                                ? addRemoveWishlist(x)
                                : navigate("/login");
                            }}
                          >
                            <i
                              className={`${
                                checkIsWishlist(x)
                                  ? "fa-sharp fa-solid fa-heart"
                                  : "fa-sharp fa-light fa-heart"
                              }`}
                            ></i>
                          </div>
                          <Link to={"/shopDetail/" + x._id}>
                            <div className="eye">
                              <i className="fa-light fa-eye"></i>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="text">
                        <h3>{x.name}</h3>
                        <p>${x.price}.00</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div className="pagination">
              <div className="container">
                {Array.from(
                  { length: Math.ceil(products.length / productsPage) },
                  (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCards;
