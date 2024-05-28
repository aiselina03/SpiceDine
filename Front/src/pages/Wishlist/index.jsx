import React, { useContext } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>SpiceDine - Wishlist</title>
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
          Wishlist
        </p>
      </div>
      {decode ? (
        <div className="wishlistPage">
          <div className="wishlist">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((x) => (
                    <tr key={x._id}>
                      <td>
                        <i
                          className="fa-sharp fa-regular fa-xmark"
                          onClick={() => addRemoveWishlist(x)}
                        ></i>
                      </td>
                      <td>
                        <Link to={"/shopDetail/" + x._id}>
                          <img src={x.image} alt="" />
                        </Link>
                      </td>
                      <td>
                        <h2 className="name">{x.name}</h2>
                        {x.ingredient}
                      </td>
                      <td>${x.price}.00</td>
                      <td>
                        <p>In Stock</p>
                      </td>
                      <td>
                        <button onClick={() => addBasket(x)}>
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"}></Navigate>
      )}
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Wishlist;
