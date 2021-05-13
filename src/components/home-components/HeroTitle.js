import { useContext } from "react";
import Context from "../../context";
export default function HeroTitle() {
  const { FontAwesomeIcon } = useContext(Context);
  return (
    <div className="hero-title">
      <FontAwesomeIcon icon={["fas", "laptop-code"]} size="2x" />
    </div>
  );
}
