import "./style.css";

type Props = {
  cardPreview: string;
  title: string;
  description: string;
  link: string;
  livePreview?: string;
  order?: number;
  backgroundSize?: number;
  backgroundPosition?: string;
};

const ProjectsCard: React.FC<Props> = ({
  cardPreview,
  title,
  description,
  link,
  livePreview,
  order = 1,
  backgroundSize = 330,
  backgroundPosition = "top",
}) => {
  return (
    <div className="clipped-border">
      <span>{title}</span>
      <img
        src="{cardPreview}"
        alt="Project Preview"
        id="clipped"
        style={{
          backgroundImage: `url(${cardPreview})`,
          backgroundSize: `${backgroundSize}px`,
          backgroundPosition: `${backgroundPosition}`,
        }}
      />
    </div>
  );
};

export default ProjectsCard;
