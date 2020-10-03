import React from "react";
import "./Home.styles.scss";

const HomePage = () => (
  <div className="home">
    <div className="menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="menu-item-title">Hats</h1>
          <span className="menu-item-subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="menu-item-title">Mens</h1>
          <span className="menu-item-subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="menu-item-title">Womens</h1>
          <span className="menu-item-subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="menu-item-title">Kids</h1>
          <span className="menu-item-subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="menu-item-title">SportsWear</h1>
          <span className="menu-item-subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
