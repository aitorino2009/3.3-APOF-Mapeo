import React from "react";

/**
 * VISTA: Representación individual de un alumno.
 * Equivale a la función `mostrar_alumno(alumno, i)` de Python.
 */
export const FilaAlumno = ({ alumno, index, onActualizarNota }) => {
  const aprobado = alumno.nota >= 5;

  const handleIncrementar = () => {
    onActualizarNota(alumno.id, Math.min(10, alumno.nota + 1));
  };

  const handleDecrementar = () => {
    onActualizarNota(alumno.id, Math.max(0, alumno.nota - 1));
  };

  const handleCambioManual = (e) => {
    const valor = parseFloat(e.target.value);
    if (!isNaN(valor)) {
      onActualizarNota(alumno.id, valor);
    }
  };

  return (
    <tr className={`fila-alumno ${aprobado ? "fila-aprobado" : "fila-suspenso"}`}>
      <td className="celda-indice">#{index + 1}</td>
      <td className="celda-id">ID: {alumno.id}</td>
      <td className="celda-nombre">
        <strong>{alumno.nombre}</strong>
      </td>
      <td className="celda-nota">
        <div className="control-nota">
          <button
            type="button"
            className="btn-mini"
            onClick={handleDecrementar}
            disabled={alumno.nota <= 0}
            title="Restar 1 punto"
          >
            -
          </button>
          <input
            type="number"
            min="0"
            max="10"
            step="0.5"
            value={alumno.nota}
            onChange={handleCambioManual}
            className="input-nota"
            aria-label={`Nota de ${alumno.nombre}`}
          />
          <button
            type="button"
            className="btn-mini"
            onClick={handleIncrementar}
            disabled={alumno.nota >= 10}
            title="Sumar 1 punto"
          >
            +
          </button>
        </div>
      </td>
      <td className="celda-estado">
        <span className={`badge ${aprobado ? "badge-aprobado" : "badge-suspenso"}`}>
          {aprobado ? "✓ Aprobado" : "✗ Suspenso"}
        </span>
      </td>
    </tr>
  );
};
