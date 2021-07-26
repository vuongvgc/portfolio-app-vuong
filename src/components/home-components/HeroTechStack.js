import TechStackItem from "./TechStackItem";

export default function HeroTechStack() {
  const techStackItems = [
    {
      title: "HTML5",
      iconName: "html5",
    },
    {
      title: "CSS3",
      iconName: "css3-alt",
    },
    {
      title: "Sass",
      iconName: "sass",
    },
    {
      title: "Bootstrap",
      iconName: "bootstrap",
    },

    {
      title: "React",
      iconName: "react",
    },
    {
      title: "JavaScript",
      iconName: "js",
    },
    {
      title: "Node JS",
      iconName: "node-js",
    },
    {
      title: "Git",
      iconName: "git-alt",
    },
  ];
  return (
    <div className="hero-tech-stack-section">
      {techStackItems.map((item, index) => {
        return (
          <TechStackItem
            key={index}
            title={item.title}
            iconName={item.iconName}
          />
        );
      })}
    </div>
  );
}
