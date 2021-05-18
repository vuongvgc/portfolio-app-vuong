import { useContext, useState } from "react";
import Context from "../../context";
import NavLink from "./NavLink";
export default function Navigation() {
  const { textContent, FontAwesomeIcon } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <span>
      <span className="nav-big-screens">
        <NavLink title={textContent.navigation.home} link="/" />
        <NavLink title={textContent.navigation.portfolio} link="/portfolio" />
        <NavLink title={textContent.navigation.resume} link="/resume" />
      </span>
      <span className="nav-small-screens">
        {isOpen ? (
          <span onClick={() => handleClick()}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </span>
        ) : (
          <span onClick={() => handleClick()}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </span>
        )}
        <ul
          className={
            isOpen ? "nav-links-sm-screen  show-nav" : "nav-links-sm-screen"
          }
        >
          <li className="nav-link-sm-item" onClick={() => handleClick()}>
            <NavLink title={textContent.navigation.home} link="/" />
          </li>
          <li className="nav-link-sm-item" onClick={() => handleClick()}>
            <NavLink
              title={textContent.navigation.portfolio}
              link="/portfolio"
            />
          </li>
          <li className="nav-link-sm-item" onClick={() => handleClick()}>
            <NavLink title={textContent.navigation.resume} link="/resume" />
          </li>
        </ul>
      </span>
    </span>
  );
}
