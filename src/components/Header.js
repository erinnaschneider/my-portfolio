import React from "react";

function Header(props) {
  const {
    navOptions = [],
    currentNav,
    setCurrentNav
  } = props;

  // return JSX for my name and nav links
  return (
    <section className="header">
      <h1>Erinn Schneider</h1>
      <ul>
        {navOptions.map((option) => (
          <li 
            className={`${currentNav === option && 'navActive'}`}
            key={option}
          >
            <span
              onClick={() => {
                setCurrentNav(option);
              }}
            >
              {option}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Header;