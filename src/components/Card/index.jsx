import "./style.css";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import ModalRemovePopsicle from "../Modal/ModalRemovePopsicle"
import ModalEditPopsicle from "../Modal/ModalEditPopsicle"


const Card = ({ popsicle, getPopsicle }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  }

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  }
  
  return (
    <>
    <div className="card-container">
        <div className="card-header">
          <p>{`R$${popsicle.preco.toFixed(2)}`}</p>
          <img src={popsicle.foto} alt={`Paleta sabor ${popsicle.sabor}`} />
        </div>
        <h3>{popsicle.sabor}</h3>
        <p>{popsicle.descricao}</p>
        <div className="card-body">
          <span title="Editar">
            <FaEdit onClick={handleShowEditModal} />
          </span>
          <span title="Remover">
            <FaTrashAlt onClick={handleShowRemoveModal} />
          </span>
        </div>
        <button onClick={() => toast.error("Sessão em desenvolvimento")}>
          Adicionar
        </button>
      </div>
      {showRemoveModal && (
        <ModalRemovePopsicle
          closeModal={handleShowRemoveModal}
          popsicle={popsicle}
          getpopsicles={getPopsicle}
        />
      )}
      {showEditModal && (
        <ModalEditPopsicle
          closeModal={handleShowEditModal}
          popsicle={popsicle}
          getpopsicles={getPopsicle}
        />
      )}
    </>
  );
};

export default Card;
