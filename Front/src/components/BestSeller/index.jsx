import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function BestSeller() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(7, 11));
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bestSeller">
        <div className="bestContainer">
          <div className="header">
            <img src="/src/images/sepreter.png" alt="" />
            <h2>BEST SPECIALTIES</h2>
            <p>
              As the leaves change and the air turns crisp, we invite you to
              celebrate the flavors of fall with our limited-time special.
            </p>
          </div>
          {isLoading ? (
            <div className="loaderCenterCards">
              <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </div>
            </div>
          ) : (
            <div className="bestCards">
              {products.map((x) => (
                <div className="bestCard" key={x._id}>
                  <div className="image">
                    <img src={x.image} alt="" />
                    <div className="hover">
                      <div
                        className="cart-shopping"
                        onClick={() => {
                          decode ? addBasket(x) : navigate("/login")
                        }}
                      >
                        <i className="fa-light fa-cart-shopping"></i>
                      </div>
                      <div
                        className="heart"
                        onClick={() => {
                          decode ? addRemoveWishlist(x) : navigate("/login")
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
          <Link to={"/shop"}>
            <div className="btn">
              <p>VIEW ALL PRODUCTS</p>
              <div className="opacity"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
