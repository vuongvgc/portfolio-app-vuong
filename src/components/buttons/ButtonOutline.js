import Context from "../../context";
import { useContext } from "react/cjs/react.development";
export default function ButtonOutline({ title, icon, isCV }) {
  const { textContent, FontAwesomeIcon } = useContext(Context);
  return (
    <a
      type="button"
      target="_blank"
      rel="noopener noreferrer"
      href={isCV ? textContent.downloads.cv : textContent.downloads.resume}
      className="button-outline navlink "
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  );
}
