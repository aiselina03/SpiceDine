import React, { useEffect, useState } from "react";
import "./style.scss";

function StartersMenu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menuByCategory/65c529681f52b89d9036716b")
      .then((res) => res.json())
      .then((data) =>{
        setProducts(data)
        setIsLoading(false)
      } );
  }, []);

  return (
    <>
      <div className="startersMenu">
        <div className="sMenu">
          <div className="menuPhoto">
            <h2>ASPARAGUS & HALLOUMI SALAD</h2>
            <p>
            Smoked streaky bacon / Frozen peas / Fresh chervil
            </p>
            <h3>$14</h3>
          </div>
          <div className="menuStarters">
            <div className="headers">
              <p>Tasty</p>
              <h1>STARTERS</h1>
            </div>
            {isLoading ? (
              <div className="loaderCenterCards">
                <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
            <>
             {products.map((x) => (
              <div className="starters" key={x._id}>
                <div className="head">
                  <h2>{x.name}</h2>
                  <p>{x.ingredient}</p>
                </div>
                <div className="price">
                  <p>${x.price}</p>
                </div>
              </div>
            ))}
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartersMenu;
