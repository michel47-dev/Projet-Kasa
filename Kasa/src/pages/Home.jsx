import logements from "../data/logements.json"
import Banner from "../components/Banner"
import Card from "../components/Card"
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
     console.log(logements);
    return (
       
        
<div>
  <Header />
  <Banner />

  <div className="home__cards">
    {logements.map(logement => (
      <Card key={logement.id} logement={logement} />
    ))}
  </div>
  <Footer />
  

</div>
    )
}
export default Home