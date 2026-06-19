import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";


const Logement = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    console.log(logement);


    return (
        <div className="logement">
            <div className="logement__content">
                <img className="logement__img" src={logement.cover} alt={logement.title} />
                <h1 className="logement__title" >{logement.title}</h1>
                <h2 className="logement__location">{logement.location}</h2>
             <div className="logement__tags">
                    {logement.tags.map((tag) => (
                        <span key={tag} className="logement__tag">{tag}</span>
                    ))}
                </div>
             <div className="logement__collapse">
             <Collapse title="Description" content={logement.description} />
             <Collapse title="Équipements" content={logement.equipments.map((equipement)=>(
                <p key={equipement}>{equipement}</p> 
             ))}
             />
                </div>
                
                
            </div>
        </div>

    )
}

export default Logement