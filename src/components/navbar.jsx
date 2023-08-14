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
    var container = document.getElementById("condensed");
    var icon = document.getElementById("icon-con");
    var hamburger = document.getElementById("hamburger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      container.style.padding = "0"
      icon.style.paddingTop = "1em";
      icon.style.paddingLeft = ".5em";
      icon.style.paddingBottom = "1em";

      x.style.display = "block";
    }
  }

  let navbar;
  if (isDesktopOrLaptop) {
    navbar = (
      <nav className="expanded" id="expanded">
        <ul id="nav-links">
          <li>
            <a href="#" id="icon" className="icon">
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
    );
  } else {
    navbar = (
      <nav className="condensed" id="condensed">
        <a href="#" id="icon-con" className="icon">
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

        <a href="#" id="hamburger" className="hamburger" onClick={logNavClick}>
          <UilBars />
        </a>
      </nav>
    );
  }

  console.log(navbar);
  return navbar;
};

export default Navbar;
