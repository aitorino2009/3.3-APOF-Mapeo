import React from "react";
import { FilaAlumno } from "./FilaAlumno";

/**
 * VISTA: Tabla de alumnos.
 *
 * Mapeo funcional declarativo:
 * Equivale directamente a la instrucción Python:
 * [mostrar_alumno(alumno, i) for i, alumno in enumerate(alumnos)]
 */
export const TablaAlumnos = ({ alumnos, onActualizarNota }) => {
  if (alumnos.length === 0) {
    return (
      <div className="mensaje-vacio">
        <p>No hay alumnos que coincidan con el filtro seleccionado.</p>
      </div>
    );
  }

  return (
    <div className="tabla-responsiva-contenedor">
      <table className="tabla-alumnos">
        <thead>
          <tr>
            <th>Posición</th>
            <th>ID</th>
            <th>Nombre del Alumno</th>
            <th>Calificación (0 - 10)</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {/*
            Mapeo funcional declarativo:
            Transforma la colección de alumnos en componentes visuales.
          */}
          {alumnos.map((alumno, index) => (
            <FilaAlumno
              key={alumno.id}
              alumno={alumno}
              index={index}
              onActualizarNota={onActualizarNota}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

