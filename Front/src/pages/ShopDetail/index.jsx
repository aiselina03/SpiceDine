import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/wishlistContext";
import { BasketContext } from "../../context/basketContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BestSeller from "../../components/BestSeller";
import { UserContext } from "../../context/userContext";
function ShopDetail() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/menu/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>SpiceDine - Shop Detail</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="account">
        <p>
          <Link to={"/shop"}>
            <i className="fa-regular fa-shop"></i>
          </Link>
          Shop Detail
        </p>
      </div>
      <div className="details">
        <div className="detailPage">
          {isLoading ? (
            <div className="loaderCenterCards">
              <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </div>
            </div>
          ) : (
            <div className="detail">
              <div className="image">
                <TransformWrapper>
                  <TransformComponent>
                    <img src={products.image} alt="" />
                  </TransformComponent>
                </TransformWrapper>
              </div>
              <div className="info">
                <div className="name">
                  <h2>{products.name}</h2>
                </div>
                <div className="stars">
                  <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                  <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                  <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                  <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                  <i className="fa-sharp fa-regular fa-star"></i>
                  <p>(2 customer review)</p>
                </div>
                <div className="price">
                  <p>${products.price}.00</p>
                </div>
                <div className="desc">
                  <p className="ingredient">
                    Ingredient: {products.ingredient}
                  </p>
                  <p>{products.description}</p>
                </div>
                <div className="addWishlist">
                  <div
                    className="heart"
                    onClick={() => {
                      decode ? addRemoveWishlist(products) : navigate("/login");
                    }}
                  >
                    <i
                      className={`${
                        checkIsWishlist(products)
                          ? "fa-sharp fa-solid fa-heart"
                          : "fa-sharp fa-light fa-heart"
                      }`}
                    ></i>
                    <p>Add to wishlist</p>
                  </div>
                </div>
                <div className="text">
                  <p>Category: Food</p>
                  <p>
                    Tags: <Link to={"/"}>Restaurant</Link> ,
                    <Link to={"/menu"}>Food</Link> ,
                    <Link to={"/shop"}>Shoping</Link>
                  </p>
                </div>
                <div className="addBasket">
                  <button
                    onClick={() => {
                      decode ? addBasket(products) : navigate("/login");
                    }}
                  >
                    <i className="fa-regular fa-cart-shopping"></i>ADD TO CART
                  </button>
                </div>
                <div className="share">
                  <p>SHARE :</p>
                  <div className="brands">
                    <a href="https://www.facebook.com/">
                      <div className="hover"></div>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <div className="hover"></div>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en">
                      <div className="hover"></div>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://az.linkedin.com/">
                      <div className="hover"></div>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <BestSeller />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default ShopDetail;
