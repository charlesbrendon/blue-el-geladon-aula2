import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";

const ModalEditPopsicle = ({ closeModal, popsicle, getPopsicle }) => {
  const [sabor, setSabor] = useState(popsicle.sabor);
  const [preco, setPreco] = useState(popsicle.preco);
  const [descricao, setDescricao] = useState(popsicle.descricao);
  const [foto, setFoto] = useState(popsicle.foto);

  const handleEditPopsicle = async () => {
    const editedPopsicle = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await api.put(
      `/paletas/atualizar-paleta/${popsicle._id}`,
      editedPopsicle
    );

    if (response.status !== 200) {
      return toast.error("A atualização falhou");
    }

    closeModal();
    getPopsicle();
    toast.success("Paleta atualizada com sucesso");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar paleta</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={sabor}
          placeholder="Digite o sabor"
          onChange={(event) => setSabor(event.target.value)}
          name="sabor"
        />
        <input
          value={preco}
          placeholder="Digite o preço"
          onChange={(event) => setPreco(event.target.value)}
          name="preco"
          type="number"
        />
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={foto}
          placeholder="Digite o caminho da foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
        />
        <button onClick={handleEditPopsicle}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditPopsicle;
