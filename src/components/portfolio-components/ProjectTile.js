import TilePreviewSection from "./TilePreviewSection";
import TileTitleSection from "./TileTitleSection";

export default function ProjectTile({
  title,
  imagePreview,
  liveProject,
  codeSource,
}) {
  return (
    <div className="project-tile">
      <TileTitleSection title={title} />
      <TilePreviewSection
        imagePreview={imagePreview}
        liveProject={liveProject}
        codeSource={codeSource}
      />
    </div>
  );
}
