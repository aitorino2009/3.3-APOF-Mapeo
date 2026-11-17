import React, { useState } from "react";
import {
  PARES_INICIALES,
  DEFINICION_PASOS,
  ejecutarUnPaso,
  ejecutarRepeticionCompleta,
} from "../modelo/algoritmoBolillos";

export const PanelSimuladorPasoAPaso = () => {
  const [pares, setPares] = useState(PARES_INICIALES);
  const [repeticionActual, setRepeticionActual] = useState(1);
  const [pasoActual, setPasoActual] = useState(0); // 0 a 4
  const [historialLogs, setHistorialLogs] = useState([
    "Estado inicial: A B C D",
  ]);

  const avanzarPaso = () => {
    const res = ejecutarUnPaso(pares, pasoActual);
    setPares(res.pares);

    const logMsg = `Repetición ${repeticionActual} - Paso ${pasoActual + 1}: ${res.detalle} ➔ [ ${res.pares.join(" ")} ]`;
    setHistorialLogs((prev) => [logMsg, ...prev.slice(0, 15)]);

    if (pasoActual === DEFINICION_PASOS.length - 1) {
      setPasoActual(0);
      setRepeticionActual((r) => r + 1);
    } else {
      setPasoActual((p) => p + 1);
    }
  };

  const ejecutarRepeticionEntera = () => {
    const res = ejecutarRepeticionCompleta(pares);
    setPares(res.pares);
    const logCompleto = `Repetición ${repeticionActual} completada: 5 pasos ejecutados ➔ [ ${res.pares.join(" ")} ]`;
    setHistorialLogs((prev) => [logCompleto, ...prev.slice(0, 15)]);
    setPasoActual(0);
    setRepeticionActual((r) => r + 1);
  };

  const reiniciarSimulador = () => {
    setPares(PARES_INICIALES);
    setRepeticionActual(1);
    setPasoActual(0);
    setHistorialLogs(["Estado inicial restablecido: A B C D"]);
  };

  return (
    <section className="panel-simulador" aria-label="Simulador interactivo del algoritmo">
      <div className="cabecera-simulador">
        <h2>🧵 Simulador Interactivo del Algoritmo (Bolillos / Trenzado)</h2>
        <span className="badge-ciclo">
          Ciclo: <strong>{repeticionActual}</strong> | Próximo Paso:{" "}
          <strong>Paso {pasoActual + 1}</strong>
        </span>
      </div>

      <div className="tablero-pares">
        <span className="etiqueta-posiciones">Posiciones de izquierda a derecha:</span>
        <div className="fila-fichas-pares">
          {pares.map((par, i) => (
            <div key={i} className="ficha-par">
              <span className="indice-posicion">Pos {i}</span>
              <div className="letra-par">{par}</div>
              <span className="simbolo-hilo">*</span>
            </div>
          ))}
        </div>
      </div>

      <div className="seccion-pasos-definicion">
        <h3>Secuencia de los 5 Pasos del Algoritmo:</h3>
        <ul className="lista-pasos">
          {DEFINICION_PASOS.map((def, idx) => (
            <li
              key={def.paso}
              className={`item-paso ${idx === pasoActual ? "paso-activo" : ""}`}
            >
              <span className="num-paso">Paso {def.paso}:</span>
              <span className="tipo-paso">{def.tipo.toUpperCase()}</span>
              <span className="desc-paso">{def.descripcion}</span>
              {idx === pasoActual && <span className="indicador-turno">◀ AHORA</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="barra-botones-simulador">
        <button
          type="button"
          className="btn btn-primario"
          onClick={avanzarPaso}
          title="Ejecutar el siguiente paso individual del algoritmo"
        >
          ▶ Ejecutar Paso {pasoActual + 1}
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={ejecutarRepeticionEntera}
          title="Ejecutar los 5 pasos de la repetición en bloque"
        >
          ⏩ Repetición Completa (+1 Ciclo)
        </button>

        <button
          type="button"
          className="btn btn-peligro"
          onClick={reiniciarSimulador}
          title="Reiniciar a pares iniciales [A, B, C, D]"
        >
          🔄 Reiniciar
        </button>
      </div>

      <div className="registro-logs">
        <h4>Historial de Operaciones:</h4>
        <div className="caja-logs">
          {historialLogs.map((log, index) => (
            <div key={index} className="linea-log">
              <code>{log}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
