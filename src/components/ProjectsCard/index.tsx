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
  isChoosen?: boolean;
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
  isChoosen,
}) => {
  const chooseProject = (e: any) => {
    e.target.classList.toggle("choose");
  };

  return (
    <a
      className="clipped-border"
      style={isChoosen === true ? { top: 0, left: 0 } : {}}
      href={link}
    >
      {/* <div
        className="project__details__overlay"
        // onClick={(e) => chooseProject(e)}
      >
        <div className="project__details">
          <p>{description}</p>
          {livePreview ? <button>live Preview</button> : ""}
          <button>
            <a href={link}>Repositório</a>
          </button>
        </div>
      </div> */}
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
    </a>
  );
};

export default ProjectsCard;

// style={{ choose === true ? top: `${top}`, left: `${left}` : ""  }}
