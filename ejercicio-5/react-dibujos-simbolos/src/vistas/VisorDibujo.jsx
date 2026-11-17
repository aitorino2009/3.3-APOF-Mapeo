import React, { useState } from "react";

export const VisorDibujo = ({ contenidoTexto, titulo }) => {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(contenidoTexto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, ignorar o usar fallback
    }
  };

  return (
    <section className="contenedor-visor" aria-label="Visor del dibujo gráfico">
      <div className="cabecera-visor">
        <div className="terminal-luces">
          <span className="luz luz-roja"></span>
          <span className="luz luz-amarilla"></span>
          <span className="luz luz-verde"></span>
          <span className="terminal-titulo">{titulo}</span>
        </div>
        <button
          type="button"
          className="btn-copiar"
          onClick={handleCopiar}
          title="Copiar dibujo gráfico al portapapeles"
        >
          {copiado ? "✓ ¡Copiado!" : "📋 Copiar Dibujo (*)"}
        </button>
      </div>

      <div className="cuerpo-visor">
        <pre className="lienzo-simbolos">{contenidoTexto}</pre>
      </div>
    </section>
  );
};
