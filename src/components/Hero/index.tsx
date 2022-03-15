import "./style.css";

import { useEffect, useState } from "react";

import HeroBackgroundImage from "../../assets/HeroBackground.png";
import HeroBackgroundImageMobile from "../../assets/HeroBackgroundMobile.png";

import ProfileImage from "./components/ProfileImage";
import ProfileName from "./components/ProfileName";
import ProfileTitle from "./components/ProfileTitle";

import { BrowserView, MobileView } from "react-device-detect";

const Hero = () => {
  const [scrollTop, setScrollTop] = useState(0);

  // esolher um nome mais declarativo para essa variavel
  const scrollingSizeBackground = -(scrollTop / 1000 - 2.44);
  const scrollingSizeProfile = -(scrollTop / 1800 - 1.2);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollingSizeBackground]);

  return (
    <>
      <BrowserView>
        <div className="hero__container" id="start">
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
      </BrowserView>
      <MobileView>
        <div className="hero--mobile" id="start">
          <ProfileImage />
          <ProfileName />
          <ProfileTitle />
          <div className="mobile__dots__scroll">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Hero;
