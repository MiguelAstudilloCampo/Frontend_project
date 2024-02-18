import React, { useState, useEffect } from "react";
import "./Style/ModalEditable.css";

const EditModal = ({ isOpen, onClose, onUpdate, selectedData }) => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (isOpen && selectedData) {
      setId(selectedData.id);
      setNombre(selectedData.nombre);
      setDescripcion(selectedData.descripcion);
    }
  }, [isOpen, selectedData]);

  const handleUpdate = () => {
    onUpdate({ id, nombre, descripcion });
    onClose();
  };

  const resetModal = () => {
    setId("");
    setNombre("");
    setDescripcion("");
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="Contenedo">
        <h3>Editar Registro</h3>
        <div className="inputs">
          <div className="primero">
            <label>ID </label>
            <input type="text" value={id} readOnly />
          </div>
          <br />
          <div className="segundo">
            <label>Nombre </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <br />
          <div className="tercero">
            <label>Descripción </label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="botones">
          <button className="btn btn-success" onClick={handleUpdate}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              resetModal();
              onClose();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
