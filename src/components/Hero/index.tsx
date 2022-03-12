import "./style.css";

import HeroImage from "../../assets/test.png";

const index = () => {
  return (
    <div className="hero__container">
      <img src={HeroImage} className="hero__image" alt="hero__image" />
      <div className="hero__text">
        <h2>Nycolas Santana</h2>
      </div>
    </div>
  );
};

export default index;
