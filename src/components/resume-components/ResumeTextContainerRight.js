import { useContext } from "react";
import Context from "../../context";
import ResumeTextRight from "./ResumeTextRight";
export default function ResumeTextContainerRight() {
  const { textContent } = useContext(Context);
  return (
    <div className="resume-text-container-right-side">
      <div className="resume-right-side-item">
        <ResumeTextRight text={textContent.resume.education.degree} />
        <ResumeTextRight text={textContent.resume.education.university} />
        <ResumeTextRight text={textContent.resume.education.gpa} />
        <ResumeTextRight text={textContent.resume.education.years} />
      </div>
      <div className="resume-right-side-item-sm">
        <ResumeTextRight text={textContent.resume.workExperience.jobPosition} />
        <ResumeTextRight text={textContent.resume.workExperience.jobPlace} />
        <ResumeTextRight text={textContent.resume.workExperience.years} />
      </div>
      <div className="resume-right-side-item-lg stacklist ">
        {textContent.resume.stack.stackList.map((item, index) => {
          return (
            <div className="stacklist-item" key={index + item}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="resume-right-side-item ">
        {textContent.resume.languages.languagesList.map((item, index) => {
          return <ResumeTextRight text={item} key={item + index} />;
        })}
      </div>
    </div>
  );
}
