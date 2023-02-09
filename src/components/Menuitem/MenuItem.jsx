import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div class="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p_cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p style={{ color: "#dcca87" }}>{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
