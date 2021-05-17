import Context from "../../context";
import { useContext } from "react/cjs/react.development";
export default function ButtonOutline({ title, icon, isCV }) {
  const { textContent, FontAwesomeIcon } = useContext(Context);
  return (
    <a
      type="button"
      rel="noopener noreferrer"
      href={
        isCV === true ? textContent.downloads.CV : textContent.downloads.resume
      }
      className="button-outline navlink "
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  );
}
