import logobanner from "../assets/banne.png"

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__img" src={logobanner} alt="logo du banner"/>
            <p className="banner__paragraphe">Chez vous, partout et ailleurs</p>
        </div>

    )
}
export default Banner