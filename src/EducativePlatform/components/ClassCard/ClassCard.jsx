import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ClassCard.css";
export const ClassCard = ({ id, title,idVisible }) => {
  const user_rol=localStorage.getItem("id_rol");
  return (
<>
    <div className="card class-card shadow-sm m-2 bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
      <img
        className="card-img-top card-image "
        src="./assets/images/class-background.png"
        alt="Card image cap"
      /><Link to={`/clases/${id}`}>
      <div className="mask" style={{"backgroundColor": "rgba(18, 102, 241, 0.5)"}}></div>
      </Link>
      <div className="card-body">
        <p className="card-text">
          <b>{title}</b>
        </p>
        {user_rol==="3"?<p className="card-text">codigo de clase: {id}</p>:<></> }
      </div>
    </div>
</>
  );
};
ClassCard.defaultProps = {
  title: "title not found",
  id: -1,
  idVisible:"false"
};

ClassCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  idVisible: PropTypes.string,
};
