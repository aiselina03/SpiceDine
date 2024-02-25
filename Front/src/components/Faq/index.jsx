import React, { useEffect, useState } from "react";
import "./style.scss";

function Faqs() {
  const [faqData, setFaqData] = useState([]);
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaqData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="faqs">
              {isLoading ? (
              <div className="loaderCenterFaq">
                <div className="loader">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </div>
            ) : (
      <div className="faqs_content">
        {faqData.map((x, index) => (
          <div className="faq_card" key={x._id}>
            <div
              className=" question"
              onClick={() => setShow(show === index ? null : index)}
            >
              <p>{x.question}</p>
              <i
                className={`fa-solid 
                  ${show === index ? " fa-chevron-down" : "fa-chevron-right"} `}
              ></i>
            </div>
            {show === index && <p className="answer"> {x.answer} </p>}
          </div>
        ))}
      </div>       )}
    </div>
  );
}

export default Faqs;
