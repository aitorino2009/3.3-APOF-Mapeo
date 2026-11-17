/**
 * MODELO (MVC) - Gestión de datos y funciones puras de transformación.
 * No contiene lógica de presentación ni efectos de React.
 */

// Lista inicial de exactamente 20 alumnos con notas entre 0 y 10
export const ALUMNOS_INICIALES = [
  { id: 1, nombre: "Lucía García", nota: 7 },
  { id: 2, nombre: "Mateo Fernández", nota: 4 },
  { id: 3, nombre: "Sofía Rodríguez", nota: 8 },
  { id: 4, nombre: "Alejandro Martínez", nota: 5 },
  { id: 5, nombre: "Valeria López", nota: 9 },
  { id: 6, nombre: "Lucas Sánchez", nota: 3 },
  { id: 7, nombre: "Emma Pérez", nota: 6 },
  { id: 8, nombre: "Hugo Gómez", nota: 2 },
  { id: 9, nombre: "Martina Martín", nota: 10 },
  { id: 10, nombre: "Daniel Jiménez", nota: 4 },
  { id: 11, nombre: "Paula Ruiz", nota: 8 },
  { id: 12, nombre: "Pablo Hernández", nota: 5 },
  { id: 13, nombre: "Alba Díaz", nota: 7 },
  { id: 14, nombre: "Álvaro Moreno", nota: 3 },
  { id: 15, nombre: "Sara Muñoz", nota: 9 },
  { id: 16, nombre: "Adrián Álvarez", nota: 6 },
  { id: 17, nombre: "Julia Romero", nota: 4 },
  { id: 18, nombre: "David Alonso", nota: 8 },
  { id: 19, nombre: "Carla Gutiérrez", nota: 1 },
  { id: 20, nombre: "Marcos Navarro", nota: 7 },
];

/**
 * Función pura: Subir un punto a todos los alumnos (tope 10).
 * No muta el array original; retorna un nuevo array mapeado.
 */
export const subirUnPuntoATodos = (alumnos) =>
  alumnos.map((alumno) => ({
    ...alumno,
    nota: Math.min(10, Math.round((alumno.nota + 1) * 10) / 10),
  }));

/**
 * Función pura: Modificar la nota de un alumno concreto por ID.
 */
export const modificarNotaAlumno = (alumnos, id, nuevaNota) => {
  const notaValida = Math.max(0, Math.min(10, Number(nuevaNota) || 0));
  return alumnos.map((alumno) =>
    alumno.id === id ? { ...alumno, nota: notaValida } : alumno
  );
};

/**
 * Función pura: Asignar nuevas notas aleatorias (0-10) a todos los alumnos.
 */
export const asignarNotasAleatorias = (alumnos) =>
  alumnos.map((alumno) => ({
    ...alumno,
    nota: Math.floor(Math.random() * 11),
  }));

/**
 * Función pura: Filtrar alumnos por criterio ('todos', 'aprobados', 'suspensos').
 */
export const filtrarAlumnos = (alumnos, filtro) => {
  if (filtro === "aprobados") {
    return alumnos.filter((alumno) => alumno.nota >= 5);
  }
  if (filtro === "suspensos") {
    return alumnos.filter((alumno) => alumno.nota < 5);
  }
  return alumnos;
};

/**
 * Función pura: Ordenar alumnos según criterio ('id', 'nombre', 'nota-asc', 'nota-desc').
 */
export const ordenarAlumnos = (alumnos, orden) => {
  const copia = [...alumnos];
  switch (orden) {
    case "nombre":
      return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    case "nota-asc":
      return copia.sort((a, b) => a.nota - b.nota);
    case "nota-desc":
      return copia.sort((a, b) => b.nota - a.nota);
    case "id":
    default:
      return copia.sort((a, b) => a.id - b.id);
  }
};

/**
 * Función pura: Calcular estadísticas del grupo (media, aprobados, suspensos, max, min).
 */
export const calcularEstadisticas = (alumnos) => {
  if (alumnos.length === 0) {
    return { media: 0, total: 0, aprobados: 0, suspensos: 0, max: 0, min: 0 };
  }
  const total = alumnos.length;
  const suma = alumnos.reduce((acc, curr) => acc + curr.nota, 0);
  const media = Number((suma / total).toFixed(2));
  const aprobados = alumnos.filter((a) => a.nota >= 5).length;
  const suspensos = total - aprobados;
  const max = Math.max(...alumnos.map((a) => a.nota));
  const min = Math.min(...alumnos.map((a) => a.nota));

  return { media, total, aprobados, suspensos, max, min };
};
