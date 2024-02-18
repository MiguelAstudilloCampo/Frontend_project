import React, { useState, useEffect } from "react";
import "./Style/Modal.css";

const CreateModal = ({ isOpen, onClose, onCreate }) => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Restablecer los estados al abrir el modal
      setId("");
      setNombre("");
      setDescripcion("");
    }
  }, [isOpen]);

  const handleCreate = () => {
    onCreate({ id, nombre, descripcion });
    onClose();
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="Contenedor">
        <h3>Crear Registro</h3>
        <div>
          <div className="primero">
            <label>ID </label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
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
          <button className="btn btn-success" onClick={handleCreate}>
            Confirmar
          </button>
          <button className="btn btn-danger" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
