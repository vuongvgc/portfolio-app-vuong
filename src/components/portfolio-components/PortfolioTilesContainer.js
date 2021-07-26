import ProjectTile from "./ProjectTile";
import Context from "../../context";
import { useContext } from "react";
export default function PortfolioTilesContainer() {
  const { textContent } = useContext(Context);
  console.log(textContent.portfolio);
  return (
    <div className="portfolio-tiles-container">
      {textContent.portfolio.map((item, index) => {
        console.log(item);
        return (
          <ProjectTile
            key={index}
            title={item.title}
            imagePreview={item.imagePreview}
            liveProject={item.links.liveProject}
            codeSource={item.links.codeSource}
          />
        );
      })}
    </div>
  );
}
