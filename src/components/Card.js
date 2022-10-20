import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div class="card">
      <img src={props.imgLink} class="card-img-top" alt={props.imgAltText} />
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        <Link to={props.cardLink}>Click Here</Link>
      </div>
    </div>
  );
}

export default Card;
