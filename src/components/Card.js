// import { Link } from "react-router-dom";

function Card(props) {
  if (props.data.gitLink && props.data.cardLink) {
    return (
      <div className='card'>
        <img
          src={props.data.imgLink}
          className='card-img-top'
          alt={props.data.imgAltText}
        />
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='card-title fs-2'>{props.data.cardTitle}</h5>
          <p className='card-text'>{props.data.cardText}</p>
          <div className='button-box'>
            <a
              href={props.data.cardLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn btn-primary'>
                Visit Deployment
              </button>
            </a>
            <a
              href={props.data.gitLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn btn-primary'>
                Visit Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (props.data.id === 2 || props.data.id === 5) {
    return (
      <div className='card'>
        <img
          src={props.data.imgLink}
          className='card-img-top'
          alt={props.data.imgAltText}
        />
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='card-title fs-2'>{props.data.cardTitle}</h5>
          <p className='card-text'>{props.data.cardText}</p>
          <div className='button-box'>
            <a
              href={props.data.gitLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn btn-primary'>
                Visit Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='card'>
        <img
          src={props.data.imgLink}
          className='card-img-top'
          alt={props.data.imgAltText}
        />
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='card-title fs-2'>{props.data.cardTitle}</h5>
          <p className='card-text'>{props.data.cardText}</p>
          <div className='button-box'>
            <a
              href={props.data.cardLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn btn-primary'>
                Visit Deployment
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// Remove this
export default Card;
