import React from "react";
import { useLocation } from "react-router-dom";

import "./style.css";

const BackgroundSwitcher = (props) => {
  const { pathname } = useLocation();

  return (
    <div className={`BackgroundSwitcher ${pathname.slice(1)}`}>
      {props.children}
    </div>
  );
};

export default BackgroundSwitcher;
