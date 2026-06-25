import logements from "../data/logements.json"
import Banner from "../components/Banner"
import Card from "../components/Card"

import imageHome from "../assets/banne.png";

const Home = () => {
     console.log(logements);
    return (
       
        
<div>
  
  <Banner image={imageHome}  
  text="Chez vous, partout et ailleurs"   
  />

  <div className="home__cards">
    {logements.map(logement => (
      <Card key={logement.id} logement={logement} />
    ))}
  </div>
  
  

</div>
    )
}
export default Home