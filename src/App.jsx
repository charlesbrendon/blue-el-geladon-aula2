import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react"
import api from "./api";


const App = () => {
  const [popsicle, setPopsicle] = useState([]);

  const getPopsicle = async () => {
    const response = await api.get("/paletas/listar-paletas");
    

    setPopsicle(response.data)
  }

  useEffect(() => {
    getPopsicle()
  }, [])
  return (
    <>
      <Toaster position="bottom-center" />
      <Header getPopsicle={getPopsicle} />
      <Home popsicle={popsicle} getPopsicle={getPopsicle} />
      <Footer />
    </>
  );
};

export default App;
