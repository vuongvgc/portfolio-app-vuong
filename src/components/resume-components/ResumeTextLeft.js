import { useContext } from "react";
import Context from "../../context";
export default function ResumeTextLeft({ title, iconPrefix, iconName }) {
  const { FontAwesomeIcon } = useContext(Context);
  return (
    <>
      <FontAwesomeIcon icon={[iconPrefix, iconName]} /> {title}
    </>
  );
}
