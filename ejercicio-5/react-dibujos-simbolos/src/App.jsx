import React, { useState, useMemo } from "react";
import { ControlesDibujo } from "./vistas/ControlesDibujo";
import { VisorDibujo } from "./vistas/VisorDibujo";
import { PanelSimuladorPasoAPaso } from "./vistas/PanelSimuladorPasoAPaso";
import {
  simularCiclos,
  generarDibujoTrayectoria,
  generarDibujoMallaTextil,
  generarDibujoRomboFlor,
  generarDibujoPiramideCruzada,
  generarDibujoOndasTrenzadas,
} from "./modelo/algoritmoBolillos";
import "./App.css";

export function App() {
  const [tipoDibujo, setTipoDibujo] = useState("trayectoria");
  const [simbolo, setSimbolo] = useState("*");
  const [repeticiones, setRepeticiones] = useState(3);
  const [tamano, setTamano] = useState(5);
  const [vistaActiva, setVistaActiva] = useState("dibujos"); // 'dibujos' | 'simulador'

  // Generación pura y reactiva del dibujo con símbolos gráficos (*)
  const { textoDibujo, tituloDibujo } = useMemo(() => {
    switch (tipoDibujo) {
      case "trayectoria": {
        const historial = simularCiclos(["A", "B", "C", "D"], repeticiones);
        return {
          textoDibujo: generarDibujoTrayectoria(historial, simbolo),
          tituloDibujo: `Trayectoria de Hilos con Símbolo (${simbolo}) - ${repeticiones} Ciclos`,
        };
      }
      case "malla":
        return {
          textoDibujo: generarDibujoMallaTextil(repeticiones, simbolo),
          tituloDibujo: `Malla Textil de Encaje de Bolillos con (${simbolo})`,
        };
      case "rombo":
        return {
          textoDibujo: generarDibujoRomboFlor(tamano, simbolo),
          tituloDibujo: `Flor y Rombos de Encaje Geométrico con (${simbolo})`,
        };
      case "piramide":
        return {
          textoDibujo: generarDibujoPiramideCruzada(tamano, simbolo),
          tituloDibujo: `Pirámide Escalonada de Cruces con (${simbolo})`,
        };
      case "ondas":
        return {
          textoDibujo: generarDibujoOndasTrenzadas(repeticiones, simbolo),
          tituloDibujo: `Ondas Trenzadas Intercaladas con (${simbolo})`,
        };
      default:
        return { textoDibujo: "", tituloDibujo: "" };
    }
  }, [tipoDibujo, simbolo, repeticiones, tamano]);

  return (
    <div className="app-simbolos-contenedor">
      <header className="cabecera-app">
        <span className="badge-tema">Ejercicio 5 • Vite + React</span>
        <h1>Patrones y Dibujos con Símbolos Gráficos (*)</h1>
        <p className="descripcion-cabecera">
          Generador visual de dibujos basado en el algoritmo de <strong>Cruzar</strong> y{" "}
          <strong>Torcer</strong> pares (Encaje de Bolillos / Trenzado de Hilos).
        </p>

        <nav className="nav-pestanas" aria-label="Navegación de secciones">
          <button
            type="button"
            className={`btn-pestana ${vistaActiva === "dibujos" ? "pestana-activa" : ""}`}
            onClick={() => setVistaActiva("dibujos")}
          >
            🖼️ Galería de Dibujos con Asteriscos (*)
          </button>
          <button
            type="button"
            className={`btn-pestana ${vistaActiva === "simulador" ? "pestana-activa" : ""}`}
            onClick={() => setVistaActiva("simulador")}
          >
            🧵 Simulador Interactivo Paso a Paso
          </button>
        </nav>
      </header>

      <main className="seccion-principal">
        {vistaActiva === "dibujos" ? (
          <div className="layout-dibujos">
            <ControlesDibujo
              tipoDibujo={tipoDibujo}
              setTipoDibujo={setTipoDibujo}
              simbolo={simbolo}
              setSimbolo={setSimbolo}
              repeticiones={repeticiones}
              setRepeticiones={setRepeticiones}
              tamano={tamano}
              setTamano={setTamano}
            />

            <VisorDibujo
              contenidoTexto={textoDibujo}
              titulo={tituloDibujo}
            />
          </div>
        ) : (
          <PanelSimuladorPasoAPaso />
        )}
      </main>

      <footer className="pie-pagina-simbolos">
        <p>
          Algoritmo base: <code>pares[0], pares[1] = cruzar(pares[0], pares[1])</code> •{" "}
          <code>torcer(par)</code> • 3 repeticiones
        </p>
      </footer>
    </div>
  );
}

export default App;
