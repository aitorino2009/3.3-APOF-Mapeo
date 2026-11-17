import React from "react";

/**
 * VISTA: Presenta métricas y estadísticas del grupo de alumnos.
 * Recibe datos procesados mediante funciones puras.
 */
export const TarjetaEstadisticas = ({ estadisticas, totalVisibles }) => {
  const { media, total, aprobados, suspensos, max, min } = estadisticas;
  const porcentajeAprobados =
    total > 0 ? ((aprobados / total) * 100).toFixed(0) : 0;

  return (
    <section className="contenedor-estadisticas" aria-label="Estadísticas globales">
      <div className="tarjeta-stat">
        <span className="stat-etiqueta">Nota Media</span>
        <span className={`stat-valor ${media >= 5 ? "positivo" : "negativo"}`}>
          {media.toFixed(1)} / 10
        </span>
      </div>

      <div className="tarjeta-stat">
        <span className="stat-etiqueta">Aprobados</span>
        <span className="stat-valor positivo">
          {aprobados} <small>({porcentajeAprobados}%)</small>
        </span>
      </div>

      <div className="tarjeta-stat">
        <span className="stat-etiqueta">Suspensos</span>
        <span className="stat-valor negativo">{suspensos}</span>
      </div>

      <div className="tarjeta-stat">
        <span className="stat-etiqueta">Extremos (Máx / Mín)</span>
        <span className="stat-valor neutral">
          {max} / {min}
        </span>
      </div>

      <div className="tarjeta-stat">
        <span className="stat-etiqueta">Visibles</span>
        <span className="stat-valor neutral">
          {totalVisibles} de {total}
        </span>
      </div>
    </section>
  );
};

