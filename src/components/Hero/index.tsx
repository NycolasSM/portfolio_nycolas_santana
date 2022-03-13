import "./style.css";

import { useEffect, useState } from "react";

import HeroImage from "../../assets/test.png";

const index = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // esolher um nome mais declarativo para essa variavel
  const scrollingSize = -(scrollTop / 1000 - 2.44);

  console.log(scrollingSize);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollingSize]);

  return (
    <div className="hero__overflow">
      <div className="hero__container">
        <div className="hero">
          <img
            src={HeroImage}
            className="hero__image"
            style={{
              transform:
                scrollingSize > 1
                  ? `scale(${scrollingSize}) translateY(${
                      scrollingSize * 3
                    }vw) `
                  : "",
            }}
            alt="hero__image"
          />
          <div className="hero__text">{/* <h2>Nycolas Santana</h2> */}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
