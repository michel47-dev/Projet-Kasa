import {Link} from "react-router-dom";

const Card = (props) => {
   
   
    return (
        <Link className="card" to={`/logement/${props.logement.id}`} >
            <img className="card__image" src={props.logement.cover} />
            <h2 className="card__title">{props.logement.title}</h2>
            
        </Link>
    )
}
export default Card