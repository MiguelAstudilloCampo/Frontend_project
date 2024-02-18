import React from "react";
import "./Style/DataList.css";

const DataList = ({ data, onEdit, onDelete }) => {
  return (
    <table className="Tabla">
      <tbody className="informacion">
        {data.map((item) => (
          <tr key={item.id}>
            <div className="datos">
              <div className="id">
                <th>ID</th>
                <td>{item.id}</td>
              </div>
              <div className="nombre">
                <th>Nombre</th>
                <td>{item.nombre}</td>
              </div>
              <div className="descripcion">
                <th>Descripcion</th>
                <td>{item.descripcion}</td>
              </div>
            </div>
            <hr />
            <td className="Botones">
              <button className="btn btn-primary" onClick={() => onEdit(item)}>
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Eliminar
              </button>
            </td>
            <hr />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
