import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer"
//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">

      <Header />
      
      <div className="container my-5">
        <div className="row text-center">
          <Card
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_del_C_A_River_Plate.svg/1200px-Escudo_del_C_A_River_Plate.svg.png"
            title="River Plate"
            description="El más grande de América"
          />
          <Card
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/CABJ70.png/960px-CABJ70.png"
            title="Boca Juniors"
            description="La pasión azul y oro"
          />
          <Card
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg/1945px-Escudo_del_Club_Atl%C3%A9tico_Independiente.svg.png"
              title="Independiente"
              description="Rey de Copas"
            />
          <Card
              img="https://upload.wikimedia.org/wikipedia/commons/6/62/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.png"
              title="San Lorenzo"
              description="El ciclón de Boedo"
              />
        </div>
      </div>

      </div>
      <Footer />
      </div>
  );
};

export default Home;