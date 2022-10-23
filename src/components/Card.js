// import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.data.imgLink}
        className="card-img-top"
        alt={props.data.imgAltText}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fs-2">{props.data.cardTitle}</h5>
        <p className="card-text fs-4">{props.data.cardText}</p>

        <a href={props.data.cardLink}>
          <button type="button" className="btn btn-primary">
            Click Here To Visit
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
