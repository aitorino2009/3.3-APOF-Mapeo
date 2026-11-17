import React from "react";

export const ControlesDibujo = ({
  tipoDibujo,
  setTipoDibujo,
  simbolo,
  setSimbolo,
  repeticiones,
  setRepeticiones,
  tamano,
  setTamano,
}) => {
  return (
    <section className="panel-controles" aria-label="Controles del generador">
      <h2 className="panel-titulo">🎨 Configuración del Dibujo con Símbolos</h2>

      <div className="fila-controles">
        <div className="campo-control">
          <label htmlFor="tipo-dibujo">Tipo de Dibujo:</label>
          <select
            id="tipo-dibujo"
            value={tipoDibujo}
            onChange={(e) => setTipoDibujo(e.target.value)}
          >
            <option value="trayectoria">1. Trayectoria de Hilos y Cruces (*)</option>
            <option value="malla">2. Malla Textil / Tejido de Bolillos (*)</option>
            <option value="rombo">3. Flor y Rombos de Encaje (*)</option>
            <option value="piramide">4. Pirámide Escalonada (*)</option>
            <option value="ondas">5. Ondas Trenzadas Cruzadas (*)</option>
          </select>
        </div>

        <div className="campo-control">
          <label htmlFor="simbolo-grafico">Símbolo Gráfico Principal:</label>
          <select
            id="simbolo-grafico"
            value={simbolo}
            onChange={(e) => setSimbolo(e.target.value)}
          >
            <option value="*">* (Asterisco clásico)</option>
            <option value="✦">✦ (Estrella de cuatro puntas)</option>
            <option value="★">★ (Estrella sólida)</option>
            <option value="#"># (Almohadilla / Cruzado denso)</option>
            <option value="o">o (Punto circular)</option>
            <option value="x">x (Cruce literal)</option>
          </select>
        </div>

        {(tipoDibujo === "malla" || tipoDibujo === "ondas" || tipoDibujo === "trayectoria") && (
          <div className="campo-control">
            <label htmlFor="num-repeticiones">
              Repeticiones / Ciclos: <strong>{repeticiones}</strong>
            </label>
            <input
              id="num-repeticiones"
              type="range"
              min="1"
              max="6"
              value={repeticiones}
              onChange={(e) => setRepeticiones(parseInt(e.target.value, 10))}
            />
          </div>
        )}

        {(tipoDibujo === "rombo" || tipoDibujo === "piramide") && (
          <div className="campo-control">
            <label htmlFor="tamano-figura">
              Tamaño / Niveles: <strong>{tamano}</strong>
            </label>
            <input
              id="tamano-figura"
              type="range"
              min="3"
              max="9"
              value={tamano}
              onChange={(e) => setTamano(parseInt(e.target.value, 10))}
            />
          </div>
        )}
      </div>
    </section>
  );
};

