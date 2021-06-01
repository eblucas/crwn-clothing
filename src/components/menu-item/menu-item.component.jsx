import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    //passing the size css clas dynamically which will be rendered if exists
    className={`${size} menu-item`}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
