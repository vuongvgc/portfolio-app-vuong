import TilePreviewSection from "./TilePreviewSection";
import TileTitleSection from "./TileTitleSection";

export default function ProjectTile() {
  return (
    <div className="project-tile">
      <TileTitleSection />
      <TilePreviewSection />
    </div>
  );
}
