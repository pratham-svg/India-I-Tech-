// eslint-disable-next-line
import React from "react";
import About from "./Componets/About/About";
import Footer from "./Componets/Footer/Footer";
import Team from "./Componets/Mangment/Team";
import Contact from './Componets/Contact/Contact'
import Body1 from './Componets/Home/Body1'
import Associates from "./Componets/Associates/Associates";
import Certification from "./Componets/Certification/Certification";
import HomeNew from "./Componets/Home/HomeNew";
import Services from "./Componets/Services/Services";
import Gallery from "./Componets/Gallery/Gallery";

function App() {
  return (
    <div>
     <HomeNew/>
      <About/>
      <Services/>
      <Body1/>
      <Associates/>
      <Certification/>
      <Team/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
