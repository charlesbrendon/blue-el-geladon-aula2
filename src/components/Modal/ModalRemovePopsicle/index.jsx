import "./style.css";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalRemovePopsicle = ({ closeModal, popsicle, getPopsicle }) => {
  const handleRemovePopsicle = async () => {
    const response = await api.delete(
      `/paletas/excluir-paleta/${popsicle._id}`
    );

    if (response.status !== 200) {
      return toast.error("Erro na exclusão da paleta");
    }

    closeModal();
    getPopsicle();
    toast.success("Paleta excluida com sucesso!");
  };
  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir a paleta {popsicle.sabor}?</h3>
        <div className="modalRemove-actions">
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
          <button className="successButton" onClick={handleRemovePopsicle}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemovePopsicle;
