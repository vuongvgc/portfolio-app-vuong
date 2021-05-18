import { useContext } from "react";
import Context from "../../context";
export default function LanguageToggle() {
  const { handleSwitch } = useContext(Context);

  return (
    <div className="toggle-box">
      EN{" "}
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch} />
        <span className="slider round"></span>
      </label>
      VIE{" "}
    </div>
  );
}
