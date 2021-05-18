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
      <span>
        <NavLink title={textContent.navigation.home} link="/" />
        <NavLink title={textContent.navigation.portfolio} link="/portfolio" />
        <NavLink title={textContent.navigation.resume} link="/resume" />
      </span>
      <span className="nav-small-screen">
        {isOpen ? (
          <span onClick={() => handleClick()}>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </span>
        ) : (
          <span onClick={() => handleClick()}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </span>
        )}
      </span>
    </span>
  );
}
