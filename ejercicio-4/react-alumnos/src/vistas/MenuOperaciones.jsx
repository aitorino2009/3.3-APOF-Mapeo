import React from "react";

/**
 * VISTA: Menú principal de operaciones disponibles.
 * Cumple con el requisito: "Procurar que la función 'main' sea un menú de operaciones a utilizar en las funciones".
 */
export const MenuOperaciones = ({
  onSubirUnPunto,
  onRestablecer,
  onGenerarAleatorias,
  filtroActual,
  onCambiarFiltro,
  ordenActual,
  onCambiarOrden,
}) => {
  return (
    <section className="panel-operaciones" aria-label="Menú de operaciones">
      <h2 className="panel-titulo">⚙️ Menú de Operaciones</h2>

      <div className="grupo-acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={onSubirUnPunto}
          title="Suma 1 punto a las notas de todos los alumnos (tope 10)"
        >
          ⬆️ Subir +1 a todos
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={onGenerarAleatorias}
          title="Genera notas aleatorias entre 0 y 10 para simulación"
        >
          🎲 Notas aleatorias
        </button>

        <button
          type="button"
          className="btn btn-peligro"
          onClick={onRestablecer}
          title="Restaura las notas iniciales del grupo"
        >
          🔄 Restablecer originales
        </button>
      </div>

      <div className="grupo-filtros-orden">
        <div className="control-campo">
          <label htmlFor="select-filtro">Filtrar por:</label>
          <select
            id="select-filtro"
            value={filtroActual}
            onChange={(e) => onCambiarFiltro(e.target.value)}
          >
            <option value="todos">Todos los alumnos</option>
            <option value="aprobados">Solo aprobados (≥ 5)</option>
            <option value="suspensos">Solo suspensos (&lt; 5)</option>
          </select>
        </div>

        <div className="control-campo">
          <label htmlFor="select-orden">Ordenar por:</label>
          <select
            id="select-orden"
            value={ordenActual}
            onChange={(e) => onCambiarOrden(e.target.value)}
          >
            <option value="id">Nº de lista (ID)</option>
            <option value="nombre">Nombre (A - Z)</option>
            <option value="nota-desc">Mayor nota primero</option>
            <option value="nota-asc">Menor nota primero</option>
          </select>
        </div>
      </div>
    </section>
  );
};
