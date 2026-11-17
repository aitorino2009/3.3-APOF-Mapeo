/**
 * MODELO: Algoritmo de Cruce y Torsión (Encaje de Bolillos / Trenzado)
 * Funciones puras para simular los pasos y generar dibujos con símbolos gráficos (*).
 */

export const PARES_INICIALES = ["A", "B", "C", "D"];

/**
 * Función pura: Cruza dos pares (intercambia su posición).
 */
export const cruzar = (par1, par2) => [par2, par1];

/**
 * Función pura: Describe la torsión de un par sobre sí mismo.
 */
export const torcer = (par) => `${par}⟳`;

/**
 * Lista de los 5 pasos que componen una repetición (un ciclo de trenza/flor).
 */
export const DEFINICION_PASOS = [
  { paso: 1, tipo: "cruzar", indices: [0, 1], descripcion: "Cruzar par 0 y par 1" },
  { paso: 2, tipo: "torcer", indice: 0, descripcion: "Torcer par 0 sobre sí mismo" },
  { paso: 3, tipo: "cruzar", indices: [1, 2], descripcion: "Cruzar par 1 y par 2" },
  { paso: 4, tipo: "torcer", indice: 1, descripcion: "Torcer par 1 sobre sí mismo" },
  { paso: 5, tipo: "cruzar", indices: [2, 3], descripcion: "Cruzar par 2 y par 3" },
];

/**
 * Ejecuta un único paso sobre el estado de pares, retornando el nuevo estado y el log de acción.
 */
export const ejecutarUnPaso = (paresActuales, indicePaso) => {
  const pasoInfo = DEFINICION_PASOS[indicePaso];
  const nuevosPares = [...paresActuales];
  let detalle = "";

  if (pasoInfo.tipo === "cruzar") {
    const [i, j] = pasoInfo.indices;
    const [nuevoI, nuevoJ] = cruzar(nuevosPares[i], nuevosPares[j]);
    detalle = `Cruzar ${nuevosPares[i]} ←→ ${nuevosPares[j]}`;
    nuevosPares[i] = nuevoI;
    nuevosPares[j] = nuevoJ;
  } else if (pasoInfo.tipo === "torcer") {
    const i = pasoInfo.indice;
    detalle = `Torcer ${nuevosPares[i]} sobre sí mismo`;
  }

  return {
    pares: nuevosPares,
    detalle,
    pasoInfo,
  };
};

/**
 * Ejecuta una repetición completa (los 5 pasos en secuencia).
 */
export const ejecutarRepeticionCompleta = (paresActuales) => {
  let pares = [...paresActuales];
  const logs = [];

  for (let i = 0; i < DEFINICION_PASOS.length; i++) {
    const resultado = ejecutarUnPaso(pares, i);
    pares = resultado.pares;
    logs.push(resultado.detalle);
  }

  return { pares, logs };
};

/**
 * Simula N repeticiones y genera el historial completo de estados.
 */
export const simularCiclos = (paresIniciales = PARES_INICIALES, numRepeticiones = 3) => {
  let estado = [...paresIniciales];
  const historial = [
    {
      repeticion: 0,
      paso: 0,
      pares: [...estado],
      descripcion: "Estado inicial",
    },
  ];

  for (let r = 1; r <= numRepeticiones; r++) {
    for (let p = 0; p < DEFINICION_PASOS.length; p++) {
      const res = ejecutarUnPaso(estado, p);
      estado = res.pares;
      historial.push({
        repeticion: r,
        paso: p + 1,
        pares: [...estado],
        descripcion: res.detalle,
      });
    }
  }

  return historial;
};

// =========================================================================
// GENERADORES DE DIBUJOS GRÁFICOS BASADOS EN SÍMBOLOS ASTERISCO (*)
// =========================================================================

/**
 * DIBUJO 1: Diagrama de Hilos y Cruces (Trayectoria)
 */
export const generarDibujoTrayectoria = (historial, s = "*") => {
  let lineas = [];
  lineas.push(`=== TRAYECTORIA DE HILOS CON SÍMBOLO [ ${s} ] ===\n`);

  historial.forEach((item, idx) => {
    if (item.paso === 0 || item.paso === 5) {
      const repLabel = item.repeticion === 0 ? "Inicio" : `Ciclo ${item.repeticion}`;
      lineas.push(`[${repLabel.padEnd(8)}]  |  ${item.pares.map((p) => `(${p}) ${s}`).join("   ")}`);
      if (idx < historial.length - 1) {
        lineas.push(`            |    \\ /     \\ /  `);
        lineas.push(`            |     ${s}       ${s}   `);
        lineas.push(`            |    / \\     / \\  `);
      }
    }
  });

  return lineas.join("\n");
};

/**
 * DIBUJO 2: Malla Textil de Tejido Entrelazado
 */
export const generarDibujoMallaTextil = (repeticiones = 3, s = "*") => {
  let lineas = [];
  lineas.push(`=== PATRÓN DE MALLA TEXTIL / TEJIDO [ ${s} ] ===\n`);

  const celda = [
    `   ${s}       ${s}       ${s}       ${s}   `,
    `  ${s} ${s}     ${s} ${s}     ${s} ${s}     ${s} ${s}  `,
    ` ${s}   ${s}   ${s}   ${s}   ${s}   ${s}   ${s}   ${s} `,
    `${s}  ${s}  ${s} ${s}  ${s}  ${s} ${s}  ${s}  ${s} ${s}  ${s}  ${s}`,
    ` ${s}   ${s}   ${s}   ${s}   ${s}   ${s}   ${s}   ${s} `,
    `  ${s} ${s}     ${s} ${s}     ${s} ${s}     ${s} ${s}  `,
  ];

  for (let r = 0; r < repeticiones; r++) {
    lineas.push(`--- Módulo Textil #${r + 1} ---`);
    celda.forEach((fila) => lineas.push(fila));
  }

  return lineas.join("\n");
};

/**
 * DIBUJO 3: Rombos y Flores de Encaje
 */
export const generarDibujoRomboFlor = (tamano = 5, s = "*") => {
  let lineas = [];
  lineas.push(`=== FLOR Y ROMBOS DE ENCAJE GEOMÉTRICO [ ${s} ] ===\n`);

  // Mitad superior
  for (let i = 0; i < tamano; i++) {
    const espacios = " ".repeat(tamano - i - 1);
    const simbolos = `${s} `.repeat(i + 1).trim();
    lineas.push("        " + espacios + simbolos);
  }
  // Mitad inferior
  for (let i = tamano - 2; i >= 0; i--) {
    const espacios = " ".repeat(tamano - i - 1);
    const simbolos = `${s} `.repeat(i + 1).trim();
    lineas.push("        " + espacios + simbolos);
  }

  // Reflejo entrelazado
  lineas.push("\n  --- Flor de Cruce Concéntrico ---");
  for (let i = 0; i < tamano; i++) {
    const borde = " ".repeat(tamano - i - 1) + s;
    const centro = i > 0 ? " ".repeat(2 * i - 1) + s : "";
    lineas.push("        " + borde + centro);
  }
  for (let i = tamano - 2; i >= 0; i--) {
    const borde = " ".repeat(tamano - i - 1) + s;
    const centro = i > 0 ? " ".repeat(2 * i - 1) + s : "";
    lineas.push("        " + borde + centro);
  }

  return lineas.join("\n");
};

/**
 * DIBUJO 4: Pirámide Escalonada de Cruces
 */
export const generarDibujoPiramideCruzada = (niveles = 6, s = "*") => {
  let lineas = [];
  lineas.push(`=== PIRÁMIDE ESCALONADA DE CRUCES [ ${s} ] ===\n`);

  for (let i = 1; i <= niveles; i++) {
    const espIzquierda = " ".repeat((niveles - i) * 2);
    const cuerpo = (`${s}   `).repeat(i).trim();
    lineas.push("   " + espIzquierda + cuerpo);
  }

  lineas.push("   " + "-".repeat(niveles * 4));

  for (let i = niveles; i >= 1; i--) {
    const espIzquierda = " ".repeat((niveles - i) * 2);
    const cuerpo = (`${s}   `).repeat(i).trim();
    lineas.push("   " + espIzquierda + cuerpo);
  }

  return lineas.join("\n");
};

/**
 * DIBUJO 5: Ondas Trenzadas Cruzadas (Ondulaciones de los hilos)
 */
export const generarDibujoOndasTrenzadas = (ciclos = 3, s = "*") => {
  let lineas = [];
  lineas.push(`=== ONDAS TRENZADAS INTERCALADAS [ ${s} ] ===\n`);

  const patronOnda = [
    `  ${s}           ${s}           ${s}           ${s}  `,
    `   ${s}         ${s} ${s}         ${s} ${s}         ${s}   `,
    `    ${s}       ${s}   ${s}       ${s}   ${s}       ${s}    `,
    `     ${s}     ${s}     ${s}     ${s}     ${s}     ${s}     `,
    `      ${s}   ${s}       ${s}   ${s}       ${s}   ${s}      `,
    `       ${s} ${s}         ${s} ${s}         ${s} ${s}       `,
    `        ${s}           ${s}           ${s}        `,
    `       ${s} ${s}         ${s} ${s}         ${s} ${s}       `,
    `      ${s}   ${s}       ${s}   ${s}       ${s}   ${s}      `,
    `     ${s}     ${s}     ${s}     ${s}     ${s}     ${s}     `,
  ];

  for (let c = 0; c < ciclos; c++) {
    lineas.push(`--- Onda de Ciclo #${c + 1} ---`);
    patronOnda.forEach((fila) => lineas.push(fila));
  }

  return lineas.join("\n");
};
