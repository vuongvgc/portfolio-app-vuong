import HeroDescription from "./HeroDescription";
import HeroTechStack from "./HeroTechStack";
import HeroTitle from "./HeroTitle";

export default function HeroContentContainer() {
  return (
    <div className="hero-content-container">
      <HeroTitle />
      <HeroDescription />
      <HeroTechStack />
    </div>
  );
}
