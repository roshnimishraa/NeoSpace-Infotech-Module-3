import React from "react";
import logo from "../assets/logo.png";

function Header() {
  const appLogo = <img src={logo} alt="app logo" />;
  return (
    <div className="header">
      {/* {appLogo} */}
      <h3>Note-Taking Application</h3>
    </div>
  );
}

export default Header;
