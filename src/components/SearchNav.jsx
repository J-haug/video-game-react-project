import React from "react";
import image from "../assets/cosmic-environment-with-millions-colorful-bright-lights.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchNav() {
  return (
    <nav>
      <div className="nav__container">
        <figure className="nav__background--img--wrapper">
          <img src={image} alt="" className="nav__background--img" />
        </figure>
        <div className="row">
          <h1 className="search__title">Browse from our +10,000 games</h1>
          <div className="nav__search-bar">
            <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" className="search__input" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchNav;
