import React from "react";
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history,linkUrl, match }) => ( 
<div className = { `${size} menu-item` } onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div style = {
        { backgroundImage: `url(${imageUrl})` }
    }
    className = "bg-image" / >
    <div className = "content" >
    <h1 className = "menu-item-title" > { title.toUpperCase() } </h1> 
    <span className = "menu-item-subtitle" > Shop Now </span> </div > </div>
);

export default withRouter(MenuItem);