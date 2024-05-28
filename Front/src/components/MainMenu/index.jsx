import React, { useEffect, useState } from "react";
import "./style.scss";

function MainMenu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/menuByCategory/65c52aef1f52b89d90367188")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="mainMenu">
        <div className="mMenu">
          <div className="menuMain">
            <div className="headers">
              <p>Delicious</p>
              <h1>MAIN</h1>
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
                  <div className="main" key={x._id}>
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
            <h2>GONG BAO CHICKEN</h2>
            <p>
              Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes
            </p>
            <h3>$18</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
