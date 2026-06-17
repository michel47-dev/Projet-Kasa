

const Banner = ({image, text}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="logo du banner"/>
            <p className="banner__paragraphe">{text}</p>
        </div>

    )
}
export default Banner