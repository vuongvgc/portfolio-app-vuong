import React, { useContext } from "react";
import Context from "../../context";
export default function ResumeButton() {
  const { textContent, FontAwesomeIcon } = useContext(Context);
  return (
    <a
      type="button"
      target="_blank"
      href={textContent.downloads.resume}
      rel="noopener noreferrer"
      className="button navlink button-download-resume"
    >
      <FontAwesomeIcon icon={["fas", "cloud-download-alt"]} />{" "}
      {textContent.navigation.resume}
    </a>
  );
}
