import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => ( <div className = { `${size} menu-item` } >
    <div style = {
        { backgroundImage: `url(${imageUrl})` }
    }
    className = "bg-image" / >
    <div className = "content" >
    <h1 className = "menu-item-title" > { title.toUpperCase() } </h1> 
    <span className = "menu-item-subtitle" > Shop Now </span> </div > </div>
);

export default MenuItem;