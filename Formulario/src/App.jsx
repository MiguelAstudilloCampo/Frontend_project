import React, { useState } from "react";
import DataList from "./Components/DataList";
import CreateModal from "./Components/Modal";
import EditModal from "./Components/Modal Editable";
import "./Ap.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [idCounter, setIdCounter] = useState(1); // Nuevo estado para el contador

  const handleCreate = (newData) => {
    setData([...data, { ...newData, id: idCounter.toString() }]);
    setIdCounter(idCounter + 1); // Incrementa el contador después de cada creación
  };

  const handleEdit = (editedData) => {
    const updatedData = data.map((item) =>
      item.id === editedData.id ? editedData : item
    );
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEditModalOpen = (selected) => {
    setSelectedData(selected);
    setEditModalOpen(true);
  };

  return (
    <div className="Content">
      <div className="registro_datos">
        <h1>Registro de Datos</h1>

        <button
          className="btn btn-success"
          onClick={() => setCreateModalOpen(true)}
        >
          Crear Registro
        </button>
      </div>

      <div className="Registro">
        <div className="CrearRegistro">
          <CreateModal
            isOpen={isCreateModalOpen}
            onClose={() => setCreateModalOpen(false)}
            onCreate={handleCreate}
          />
        </div>
        <div className="RR">
          <h3>Registro</h3>
          <div className="contenedor">
            <div className="contenido">
              <DataList
                data={data}
                onEdit={handleEditModalOpen}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>

        <div className="EditarRegistro">
          {selectedData && (
            <EditModal
              isOpen={isEditModalOpen}
              onClose={() => setEditModalOpen(false)}
              onUpdate={handleEdit}
              selectedData={selectedData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
