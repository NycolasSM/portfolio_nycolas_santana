import "./style.css";

import React from "react";

type Props = {
  title: string;
  description: string;
  maxWidth?: number;
  fontSize?: number;
};

const SectionTitle: React.FC<Props> = ({
  title,
  description,
  maxWidth,
  fontSize,
}) => {
  return (
    <div className="section__title_wrapper">
      <h3 className="section__title">{title}</h3>
      <h2
        className="section__description"
        style={{
          maxWidth: `${maxWidth}px`,
          fontSize: `${fontSize}px`,
        }}
      >
        {description}
      </h2>
    </div>
  );
};

export default SectionTitle;
