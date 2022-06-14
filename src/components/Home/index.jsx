import "./style.css";
import { useState } from "react";
import Card from "../Card";
import ReactLoading from "react-loading";

const Home = ({ popsicle, getPopsicle }) => {
  const [filterInput, setfilterInput] = useState("");

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <input
        value={filterInput}
        onChange={(event) => setfilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      {popsicle.length === 0 ? (
        <ReactLoading type="spin" color="lightblue" />
      ) : (
      <div>
        {filterInput !== ""
          ? popsicle
              .filter((element) =>
                element.sabor.toLowercase().includes(filterInput.toLowerCase())
              )
              .map((element) => {
                return (
                  <Card
                    getPopsicle={getPopsicle}
                    key={element._id}
                    popsicle={element}
                  />
                );
              })
          : popsicle.map((element) => {
              return (
                <Card
                  getPopsicle={getPopsicle}
                  key={element._id}
                  popsicle={element}
                />
              );
            })}
      </div>
      )}
    </div>
  );
};

export default Home;
