import logements from "../data/logements.json"
import Banner from "../components/Banner"
import Card from "../components/Card"

const Home = () => {
     console.log(logements);
    return (
       
        
    <div>
        <Banner />
        {
        logements.map(logement => (
        <Card/>
        ))}
        
        </div>
    )
}
export default Home