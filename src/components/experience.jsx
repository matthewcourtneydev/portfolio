import React, { useState } from "react";
import Bank from "./experience_tabs/bank";
import Tek from "./experience_tabs/tek";
import Psp from "./experience_tabs/psp";

const Experience = () => {
  const [displayIndex, setDisplayIndex] = useState("bank");
  const [isActive, setIsActive] = useState("bank");

  return (
    <div id="experience" className="page">
      <h3 className="content-header">Experience</h3>
      <div id="tab-container">
        <ul id="tabs">
          <li
            id="company-tab1"
            className={isActive === "bank" ? "tab active" : "tab"}
            onClick={() => {
              setDisplayIndex("bank");
              setIsActive("bank");
            }}
          >
            <p>Bank of America</p>
          </li>
          <li
            id="company-tab2"
            className={isActive === "tek" ? "tab active" : "tab"}
            onClick={() => {
              setDisplayIndex("tek");
              setIsActive("tek");
            }}
          >
            <p>TekSystems</p>
          </li>
          <li
            id="company-tab3"
            className={isActive === "psp" ? "tab active" : "tab"}
            onClick={() => {
              setDisplayIndex("psp");
              setIsActive("psp");
            }}
          >
            <p>PSP Sports</p>
          </li>
        </ul>
        <div id="display-container">
          {displayIndex === "bank" && <Bank />}
          {displayIndex === "tek" && <Tek />}
          {displayIndex === "psp" && <Psp />}
        </div>
      </div>
    </div>
  );
};

export default Experience;
