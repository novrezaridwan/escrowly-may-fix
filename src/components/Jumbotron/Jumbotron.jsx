import { Link } from "react-router-dom";
import logoOverlay from "../../assets/img/logo-overlay.svg";
import "./Jumbotron.scss";

const Jumbotron = ({
  title,
  titleItalic,
  desc,
  labelPrimary,
  labelSecondary,
  imgContent,
}) => {
  return (
    <div className="jumbotron">
      <div className="content">
        <div className="flex flex-col">
          <h1 className="title">
            {title} <i>{titleItalic}</i>
          </h1>
          <p className="desc">{desc}</p>
          <div className="flex flex-row gap-4">
            <Link to="/sign-up" className="btn-primary">
              {labelPrimary}
            </Link>
            <Link to="/help-desk" className="btn-outline">
              {labelSecondary}
            </Link>
          </div>
        </div>
        <img src={imgContent} alt={title} />
      </div>
      <img src={logoOverlay} alt="Escrowly" className="logo-overlay" />
    </div>
  );
};

export default Jumbotron;
