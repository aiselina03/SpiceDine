import React from "react";
import "./style.scss";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";
import Faqs from "../../components/Faq";
import AskQuestions from "../../components/AskQuestions";

function Faq() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - FAQ</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="faqsPage">
        <div className="faqPage">
          <div className="headers">
            <h2>FAQS</h2>
            <p>
              Below are frequently asked questions from our customers about our
              restaurant, maybe you have similar questions or you can ask us
              questions.
            </p>
          </div>
        </div>
        <Faqs/>
        <AskQuestions/>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Faq;
