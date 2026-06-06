

const Card = (props) => {
   console.log(props);
   
    return (
        <div className="card">
            <img className="card__image" src={props.logement.cover} />
            <h2 className="card__title">{props.logement.title}</h2>
            
        </div>
    )
}
export default Card