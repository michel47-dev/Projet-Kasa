import { useState } from "react";

const Carousel = ({ pictures, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="logement__carousel">
            <img
                className="logement__img"
                src={pictures[currentIndex]}
                alt={title}
            />

            {pictures.length > 1 && (
                <>
                    <div className="logement__arrow logement__arrow--left" onClick={prevSlide}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>

                    <div className="logement__arrow logement__arrow--right" onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>

                    <p className="logement__counter">
                        {currentIndex + 1} / {pictures.length}
                    </p>
                </>
            )}
        </div>
    );
};

export default Carousel