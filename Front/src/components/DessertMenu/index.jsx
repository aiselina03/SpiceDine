import React, { useEffect, useState } from "react";
import "./style.scss";

function DessertMenu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menuByCategory/65c52b161f52b89d9036718d")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="dessertMenu">
        <div className="dMenu">
          <div className="menuPhoto">
            <h2>CHERRY PIE</h2>
            <p>
              Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes
            </p>
            <h3>$15</h3>
          </div>
          <div className="menuDessert">
            <div className="headers">
              <p>Sweet</p>
              <h1>DESSERT</h1>
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
                  <div className="dessert" key={x._id}>
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

export default DessertMenu;
