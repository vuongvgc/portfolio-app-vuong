import ButtonOutline from "../buttons/ButtonOutline";
import Context from "../../context";
import { useContext } from "react";
export default function ResumeButtonsContainer() {
  const { textContent } = useContext(Context);
  return (
    <div className="button-container">
      <ButtonOutline
        isCV={false}
        icon="cloud-download-alt"
        title={textContent.resume.buttons.resume}
      />
      <ButtonOutline
        isCV={true}
        icon="file-download"
        title={textContent.resume.buttons.cv}
      />
    </div>
  );
}
