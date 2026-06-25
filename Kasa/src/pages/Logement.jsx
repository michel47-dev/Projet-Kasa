import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { useState } from "react";
import Error from "./Error";


const Logement = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
     const [currentIndex, setCurrenIndex] = useState(0);
    if (!logement) {
        return <Error />
    }
   
    const nextSlide = () => {
        if (currentIndex === logement.pictures.length - 1) {
            setCurrenIndex(0);
        } else {
            setCurrenIndex(currentIndex + 1);
        }
    }

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrenIndex(logement.pictures.length - 1);
        } else {
            setCurrenIndex(currentIndex - 1);
        }
    }

    const stars = [1, 2, 3, 4, 5];


    return (
        <div className="logement">
            <div className="logement__content">

                <div className="logement__carousel">
                    <img className="logement__img" src={logement.pictures[currentIndex]} alt={logement.title} />

                    <div className="logement__arrow logement__arrow--left" onClick={prevSlide}>

                        <i className="fa-solid fa-chevron-left"></i>
                    </div>

                    <div className="logement__arrow logement__arrow--right" onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                     <p className="logement__counter">{currentIndex +1} / {logement.pictures.length}</p>
                </div>

                <div className="logement__info">

                    <div className="logement__left">
                        <h1 className="logement__title" >{logement.title}</h1>
                        <h2 className="logement__location">{logement.location}</h2>
                        <div className="logement__tags">
                            {logement.tags.map((tag) => (
                                <span key={tag} className="logement__tag">{tag}</span>
                            ))}
                        </div>

                    </div>

                    <div className="logement__right">

                        <div className="logement__host">
                            <p className="logement__host-name">{logement.host.name}</p>
                            <img className="logement__host-picture" src={logement.host.picture} alt={logement.host.name}
                            />
                        </div>
                        <div className="logement__rating">
                            {stars.map((star) => (
                                <i key={star} className={star <= logement.rating ? "fa-solid fa-star active"
                                    : "fa-solid fa-star"
                                } ></i>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="logement__collapse">
                    <Collapse title="Description" content={logement.description} />
                    <Collapse title="Équipements" content={logement.equipments.map((equipement) => (
                        <p key={equipement}>{equipement}</p>
                    ))}
                    />
                </div>


            </div>
        </div>

    )
}

export default Logement