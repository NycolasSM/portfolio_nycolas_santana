import "./style.css";

type Props = {
  link: string;
};

const TechnologyBadge: React.FC<Props> = ({ link }) => {
  return (
    <div className="technology__badge">
      <img src={link} alt="" />
    </div>
  );
};

export default TechnologyBadge;
