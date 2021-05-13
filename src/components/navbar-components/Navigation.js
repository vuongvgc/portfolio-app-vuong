import { useContext } from "react";
import Context from "../../context";
import NavLink from "./NavLink";
export default function Navigation() {
  const { textContent } = useContext(Context);
  return (
    <span>
      <span>
        <NavLink title={textContent.navigation.home} link="/" />
        <NavLink title={textContent.navigation.portfolio} link="/portfolio" />
        <NavLink title={textContent.navigation.resume} link="/resume" />
      </span>
    </span>
  );
}
