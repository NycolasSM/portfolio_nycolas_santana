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
  const animDecrption = (e: any) => {
    console.log(e.target.classList);
    e.target.classList.toggle("active");
  };

  return (
    <div className="clipped-border">
      <img
        src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbpucette.b.p.pic.centerblog.net%2Ffv86ll9r.jpg&f=1"
        id="clipped"
      />
    </div>
  );
};

export default ProjectsCard;
