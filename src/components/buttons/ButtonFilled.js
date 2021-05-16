import { useContext } from "react";
import Context from "../../context";
export default function ButtonFilled({ title, link, iconPrefix, iconName }) {
  const { FontAwesomeIcon } = useContext(Context);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="button-filled navlink"
    >
      <FontAwesomeIcon icon={[iconPrefix, iconName]} /> {title}
    </a>
  );
}
