import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function AskQuestions() {
  return (
    <div className="askQuestions">
      <div className="headers">
        <h2>ASK US A QUESTION</h2>
        <p>
          If you can't find the answer you're looking for, ask us a question,
          we'll be happy to answer any of your questions. We will answer your
          questions within 24 hours via email
        </p>
        <Link to={"/contact"}>
          <div className="btn">
            <p>CONTACT US</p>
            <div className="opacity"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AskQuestions;
