import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import ModalNewPopsicle from "../Modal/ModalNewPopsicle";
import newPopsicleIcon from "../../assets/icons/paleta.svg";
import { toast } from "react-hot-toast"
import { useState } from "react";

const Header = ({ getPopsicle }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  }
  return (
    <>
      <div className="header-container">
        <div className="headerTitle-container">
          <img alt="El Geladon Logo" src={logo} />
          <h2>El Geladon</h2>
        </div>
        <div className="headerOptions-container">
          <img
            className="headerOptions-newPaletteIcon"
            alt="Icone de criar nova paleta"
            src={newPopsicleIcon}
            onClick={handleShowModalCreate}
          />
          <img
            className="headerOptions-checkoutIcon"
            alt="Sacola de Checkout"
            src={checkoutIcon}
            onClick={() => toast.error("Sessão em desenvolvimento")}
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalNewPopsicle
          closeModal={handleShowModalCreate}
          getPopsicle={getPopsicle}
        />
      )}
    </>
  );
};

export default Header;