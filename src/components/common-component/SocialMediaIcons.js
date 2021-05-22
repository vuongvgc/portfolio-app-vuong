import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
export default function SocialMediaIcons(props) {
  const socialMediaIconsInfo = [
    {
      href: "tel:+84789200396",
      extraClass: "",
      iconPrefix: "fas",
      iconName: "phone-alt",
    },
    {
      href: "mailto:vuongvgc@gmail.com",
      extraClass: "",
      iconPrefix: "far",
      iconName: "envelope",
    },
    {
      href: "https://www.linkedin.com/in/vuongvgc/",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "linkedin",
    },
    {
      href: "https://www.facebook.com/vuongvgc/",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "facebook",
    },
    {
      href: "https://github.com/vuongvgc",
      extraClass: "",
      iconPrefix: "fab",
      iconName: "github",
    },
    {
      href: "https://codepen.io/Crisvuong",
      extraClass: "hide-sm-screen",
      iconPrefix: "fab",
      iconName: "codepen",
    },
    {
      href: "https://www.freecodecamp.org/vuongvgc",
      extraClass: "hide-sm-screen",
      iconPrefix: "fab",
      iconName: "free-code-camp",
    },
  ];
  return (
    <div className={`profile_links_section ${props.socialMediaIconLandscape} `}>
      {socialMediaIconsInfo.map((item, index) => {
        return (
          <SocialMediaIcon
            key={index}
            href={item.href}
            extraClass={item.extraClass}
            iconPrefix={item.iconPrefix}
            iconName={item.iconName}
          />
        );
      })}
    </div>
  );
}
