import ButtonFilled from "../buttons/ButtonFilled";
import Context from "../../context";
import { useContext } from "react";
export default function TilePreviewSection({
  imagePreview,
  liveProject,
  codeSource,
}) {
  const { textContent } = useContext(Context);
  let divStyle = {
    backgroundImage: "url(" + imagePreview + ")",
    backgroundPosition: "center",
    backgroundSize: "100%",
    objectFit: "cover",
  };
  return (
    <div style={divStyle} className="tile-preview-section">
      <ButtonFilled
        title={textContent.portfolioButtons.live}
        link={liveProject}
        iconPrefix="fas"
        iconName="eye"
      />
      <ButtonFilled
        title={textContent.portfolioButtons.code}
        link={codeSource}
        iconPrefix="fab"
        iconName="github"
      />
    </div>
  );
}
