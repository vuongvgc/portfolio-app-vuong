import { useContext } from "react";
import Context from "../../context";
import ResumeTextLeft from "./ResumeTextLeft";
export default function ResumeTextContainerLeft() {
  const { textContent } = useContext(Context);
  return (
    <div className="resume-text-container-left-side">
      <div className="resume-left-side-item">
        <ResumeTextLeft
          title={textContent.resume.education.title}
          iconPrefix="fas"
          iconName="graduation-cap"
        />
      </div>
      <div className="resume-left-side-item-sm">
        <ResumeTextLeft
          title={textContent.resume.selfLearning.title}
          iconPrefix="fas"
          iconName="laptop-code"
        />
      </div>
      <div className="resume-left-side-item-lg">
        <ResumeTextLeft
          title={textContent.resume.stack.title}
          iconPrefix="fas"
          iconName="file-code"
        />
      </div>
      <div className="resume-left-side-item resume-languages-section">
        <ResumeTextLeft
          title={textContent.resume.languages.title}
          iconPrefix="fas"
          iconName="comment-dots"
        />
      </div>
    </div>
  );
}
