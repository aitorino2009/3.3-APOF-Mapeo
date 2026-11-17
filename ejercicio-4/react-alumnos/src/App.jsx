import React from "react";
import { useAlumnosControlador } from "./controlador/useAlumnosControlador";
import { MenuOperaciones } from "./vistas/MenuOperaciones";
import { TarjetaEstadisticas } from "./vistas/TarjetaEstadisticas";
import { TablaAlumnos } from "./vistas/TablaAlumnos";
import "./App.css";

/**
 * COMPONENTE PRINCIPAL (Main / Controlador de Vista)
 * Estructurado en funciones puras y componentes modulares bajo arquitectura MVC.
 */
export function App() {
  const {
    alumnos,
    estadisticas,
    filtro,
    orden,
    subirUnPunto,
    restablecerNotas,
    generarNotasAleatorias,
    actualizarNota,
    setFiltro,
    setOrden,
  } = useAlumnosControlador();

  return (
    <div className="aplicacion-contenedor">
      <header className="cabecera-principal">
        <span className="etiqueta-badge">Ejercicio 4 • Vite + React</span>
        <h1>Gestión Calificaciones • 20 Alumnos</h1>
        <p className="subtitulo">
          Arquitectura <strong>MVC</strong>, Funciones Puras y Mapeo Declarativo
        </p>
      </header>

      <main className="contenido-principal">
        {/* Menú de Operaciones */}
        <MenuOperaciones
          onSubirUnPunto={subirUnPunto}
          onRestablecer={restablecerNotas}
          onGenerarAleatorias={generarNotasAleatorias}
          filtroActual={filtro}
          onCambiarFiltro={setFiltro}
          ordenActual={orden}
          onCambiarOrden={setOrden}
        />

        {/* Tarjetas de Estadísticas Calculadas Funcionalmente */}
        <TarjetaEstadisticas
          estadisticas={estadisticas}
          totalVisibles={alumnos.length}
        />

        {/* Tabla con Mapeo Declarativo de Alumnos */}
        <section className="seccion-tabla" aria-label="Listado de calificaciones">
          <div className="cabecera-seccion">
            <h2>Listado de Estudiantes</h2>
            <span className="conteo-alumnos">
              Mostrando {alumnos.length} de {estadisticas.total} alumnos
            </span>
          </div>

          <TablaAlumnos alumnos={alumnos} onActualizarNota={actualizarNota} />
        </section>
      </main>

      <footer className="pie-pagina">
        <p>
          Implementación funcional: <code>alumnos.map((alumno, index) =&gt; &lt;FilaAlumno /&gt;)</code>
        </p>
      </footer>
    </div>
  );
}

export default App;
