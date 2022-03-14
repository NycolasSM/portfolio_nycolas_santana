import "./style.css";

import React from "react";

type Props = {
  title: string;
  description: string;
};

const SectionTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="section__title_wrapper">
      <h3 className="section__title">{title}</h3>
      <h2 className="section__description">{description}</h2>
    </div>
  );
};

export default SectionTitle;
