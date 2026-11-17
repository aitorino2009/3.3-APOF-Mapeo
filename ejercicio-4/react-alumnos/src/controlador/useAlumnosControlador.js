import { useState, useMemo } from "react";
import {
  ALUMNOS_INICIALES,
  subirUnPuntoATodos,
  modificarNotaAlumno,
  asignarNotasAleatorias,
  filtrarAlumnos,
  ordenarAlumnos,
  calcularEstadisticas,
} from "../modelo/alumnosModelo";

/**
 * CONTROLADOR (MVC) - Hook personalizado que gestiona el estado
 * y conecta los eventos de la vista con las funciones puras del modelo.
 */
export const useAlumnosControlador = () => {
  const [alumnos, setAlumnos] = useState(ALUMNOS_INICIALES);
  const [filtro, setFiltro] = useState("todos"); // 'todos' | 'aprobados' | 'suspensos'
  const [orden, setOrden] = useState("id"); // 'id' | 'nombre' | 'nota-asc' | 'nota-desc'

  // Operaciones del Menú:
  const subirUnPunto = () => {
    setAlumnos((prev) => subirUnPuntoATodos(prev));
  };

  const restablecerNotas = () => {
    setAlumnos(ALUMNOS_INICIALES);
  };

  const generarNotasAleatorias = () => {
    setAlumnos((prev) => asignarNotasAleatorias(prev));
  };

  const actualizarNota = (id, nuevaNota) => {
    setAlumnos((prev) => modificarNotaAlumno(prev, id, nuevaNota));
  };

  // Pipeline declarativo y funcional: Filtrado + Ordenación
  const alumnosProcesados = useMemo(() => {
    const filtrados = filtrarAlumnos(alumnos, filtro);
    return ordenarAlumnos(filtrados, orden);
  }, [alumnos, filtro, orden]);

  // Cálculo funcional de métricas estadísticas
  const estadisticas = useMemo(() => {
    return calcularEstadisticas(alumnos);
  }, [alumnos]);

  return {
    alumnos: alumnosProcesados,
    totalOriginal: alumnos.length,
    filtro,
    orden,
    estadisticas,
    subirUnPunto,
    restablecerNotas,
    generarNotasAleatorias,
    actualizarNota,
    setFiltro,
    setOrden,
  };
};

