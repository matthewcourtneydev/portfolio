import React from "react";
import { UilApple, UilBars } from "@iconscout/react-unicons";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });


  function logNavClick() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      {isDesktopOrLaptop && (
        <nav className="expanded">
          <ul>
            <li>
              <a href="#">
                <UilApple />
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      )}
      {isTabletOrMobile && (
        <nav className="condensed">
          <a href="#" className="icon">
            <UilApple />
          </a>
          <ul id="nav-links">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>

          <a href="#" className="hamburger" onClick={logNavClick}><UilBars/></a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
