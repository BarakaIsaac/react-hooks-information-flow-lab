import React from "react";

function Header(onDarkModeClick, colorModifier) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {colorModifier ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;