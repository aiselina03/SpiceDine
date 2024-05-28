import React, { useEffect, useState } from "react";
import "./style.scss";

function DrinksMenu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menuByCategory/65c52b361f52b89d90367191")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="drinksMenu">
        <div className="dMenu">
          <div className="menuDrinks">
            <div className="headers">
              <p>Flavour</p>
              <h1>DRINKS</h1>
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
                  <div className="drinks" key={x._id}>
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
          <div className="menuPhoto">
            <h2>MOJITO</h2>
            <p>
              Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes
            </p>
            <h3>$12</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrinksMenu;
