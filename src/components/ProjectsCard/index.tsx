import "./style.css";

type Props = {
  gif: string;
  title: string;
  description: string;
  link: string;
  livePreview?: string;
  order?: number;
};

const ProjectsCard: React.FC<Props> = ({
  gif,
  title,
  description,
  link,
  livePreview,
  order = 1,
}) => {
  return (
    <div className="project__card">
      <img src={gif} alt="Project Gif" style={{ order: `${order}` }} />
      <div className="project__card__info" style={{ order: `1` }}>
        <h3>{title}</h3>
        <span>{description}</span>
        <div className="project__card__buttons">
          <button>
            <a href={link}>Acesse o reposiório</a>
          </button>
          {livePreview ? (
            <button>
              <a href={livePreview}>Live Preview</a>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
