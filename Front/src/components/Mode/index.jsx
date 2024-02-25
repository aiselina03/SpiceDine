import React from "react";
import "./style.scss";
import useDarkLightMode from "../../hook/useDarkLightMode";

function Mode() {
  const { handleDark, handleLight } = useDarkLightMode();
  return (
    <>
      <label htmlFor="checkbox" className="night-light-label">
        <input type="checkbox" />
        <span className="night-light-ball"> </span>
        <div className="dark" onClick={() => handleDark()}>
          <h6>Dark</h6>
        </div>
        <div className="light" onClick={() => handleLight()}>
          <h6>Light</h6>
        </div>
      </label>
    </>
  );
}

export default Mode;
