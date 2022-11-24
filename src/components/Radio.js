import React, { useState } from "react";
import "../assets/css/radio.scss";
const Radio = () => {
  let [radioopt, setradioopt] = useState("shows");
  let radiofunhandle = (e) => {
    setradioopt(e.target.value);
  };
  console.log(radioopt);
  return (
    <>
      <div className="container ">
        <ul className="list ">
          <li className="list__item" onClick={radiofunhandle}>
            <input
              type="radio"
              className="radio-btn"
              name="searchopt"
              id="a-opt"
              value={"shows"}
            />
            <label htmlFor="a-opt" className="label">
              shows
            </label>
          </li>

          <li className="list__item" onClick={radiofunhandle}>
            <input
              type="radio"
              className="radio-btn"
              name="searchopt"
              id="b-opt"
              value={"people"}
            />
            <label htmlFor="b-opt" className="label">
              people
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Radio;
