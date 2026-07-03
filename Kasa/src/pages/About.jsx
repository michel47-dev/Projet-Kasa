

import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import imageAbout from "../assets/banner2.png"
import collapses from "../data/collapse.json";

const About = () => {
  return (
    <div className="about" >
   
   <Banner  image={imageAbout} />
 
   
{
  collapses.map((collapse) => (
    <Collapse
      key={collapse.title}
      title={collapse.title}
      content={collapse.content}
    />
  ))
}
   
  
    </div>
  )
}

export default About