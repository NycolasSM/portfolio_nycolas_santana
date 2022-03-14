import "./style.css";

import { useEffect, useState } from "react";

import HeroImage from "../../assets/test.png";
import HeroBackgroundImage from "../../assets/HeroBackground.png";
import ProfileImage from "./components/ProfileImage";
import ProfileName from "./components/ProfileName";
import ProfileTitle from "./components/ProfileTitle";

const index = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // esolher um nome mais declarativo para essa variavel
  const scrollingSizeBackground = -(scrollTop / 1000 - 2.44);
  const scrollingSizeProfile = -(scrollTop / 1800 - 1.2);

  console.log(`scrollBackground${scrollingSizeBackground}`);
  console.log(`scrollProfile${scrollingSizeProfile}`);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollingSizeBackground]);

  return (
    <div className="hero__container">
      <div
        className="hero"
        style={{
          transform:
            scrollingSizeProfile > 0.5
              ? `scale(${scrollingSizeProfile}) translateY(${
                  scrollingSizeProfile * 3
                }vw) `
              : `scale(0.5) translateY(${30}px) `,
        }}
      >
        <div className="hero__profile">
          <ProfileImage />
          <ProfileName />
          <ProfileTitle />
        </div>
        <img
          src={HeroBackgroundImage}
          className="hero__background__image"
          alt="hero__image"
        />
        <div className="hero__text">{/* <h2>Nycolas Santana</h2> */}</div>
      </div>
    </div>
  );
};

export default index;
