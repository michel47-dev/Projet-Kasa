import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/logement/:id" element={<Logement />} />
    </Routes>
  )
}

export default Router