import React from "react";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  const { id, logo } = props;
  console.log(id);
  console.log(logo);
  return (
    <div className="header-bg container-fluid text-center">
      {id ? <img src={logo}></img> : <h1>league fair</h1>}
    </div>
  );
};

export default Header;
