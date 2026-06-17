import Header from "../components/Header";
import Footer from "../components/Footer";


const Error = () => {
return (
    <div className="error">
        <Header />
        <h1 className="error__title" >404</h1>
        <p className="error__text" >Oups! La page que vous demandez n'existe pas.</p>
        <a className="error__link" href="/">Retourner sur la page d'accueil</a>
        <Footer />
    </div>
)
}

export default Error