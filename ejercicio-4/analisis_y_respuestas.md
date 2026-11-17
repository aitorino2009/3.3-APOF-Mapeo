# Ejercicio 4: Análisis Metodológico, Arquitectura MVC y Respuestas

## 1. Contexto del Proyecto

Siguiendo las directrices requeridas:
- **Estructuración modular en funciones puras.**
- **La vista principal orquestada como un menú de operaciones.**
- **Paradigma declarativo y funcional (sin bucles imperativos `for`/`while`).**
- **Arquitectura MVC (Modelo - Vista - Controlador).**
- **Código optimizado y ligero en Vite + React sin dependencias externas pesadas.**

Se ha desarrollado la aplicación en el directorio `ejercicio-4/react-alumnos/`.

---

## 2. Respuesta a la Pregunta (a): ¿Es un código bien estructurado? ¿Es mejorable?

### Evaluación de la Estructura: **EXCELENTE**

El código implementado presenta una arquitectura limpia basada en las mejores prácticas de la ingeniería de software:

1. **Separación de Responsabilidades bajo MVC:**
   - **Modelo (`src/modelo/alumnosModelo.js`):** Contiene la estructura de datos de los 20 alumnos y funciones puras de transformación (`subirUnPuntoATodos`, `modificarNotaAlumno`, `asignarNotasAleatorias`, `filtrarAlumnos`, `ordenarAlumnos`, `calcularEstadisticas`). No tiene dependencias de React ni del DOM. Puede testearse de forma aislada e inmediata mediante tests unitarios (Jest/Vitest).
   - **Vista (`src/vistas/`):** Descompuesta en componentes funcionales atómicos y desacoplados:
     - `MenuOperaciones.jsx`: Cumple con la directiva de disponer de un menú de operaciones (subir punto, notas aleatorias, restablecer, filtros y ordenación).
     - `TarjetaEstadisticas.jsx`: Presenta las métricas calculadas.
     - `TablaAlumnos.jsx`: Contenedor de la tabla.
     - `FilaAlumno.jsx`: Presentación de cada alumno con control interactivo de edición.
   - **Controlador (`src/controlador/useAlumnosControlador.js`):** Un *Custom Hook* que administra el estado (`useState`), optimiza los cálculos derivados con `useMemo` y expone las funciones controladoras a las vistas.

2. **Paradigma Funcional y Declarativo:**
   - **Inmutabilidad:** Ninguna función modifica el estado original directamente. Se utilizan `map()`, `filter()`, `reduce()` y el operador de propagación (*spread operator* `...`) para generar siempre nuevos estados.
   - **Funciones Puras:** Las funciones del modelo reciben entradas y devuelven nuevas salidas predecibles sin efectos secundarios.

3. **Optimización y Peso Mínimo:**
   - No se han instalado librerías pesadas innecesarias (ni Bootstrap, ni Tailwind, ni Redux). El *bundle* de producción generado por Vite ocupa apenas **228 kB** (apenas 71 kB gzipped, que corresponden casi en su totalidad al *core* de React).

---

### ¿Es mejorable? Propuestas de Evolución Técnica

Aunque el código está perfectamente estructurado para las especificaciones del ejercicio, en un entorno de producción a gran escala podría mejorarse en los siguientes aspectos:

1. **Gestor de estado complejo con `useReducer`:**
   Si la cantidad de operaciones por lote aumentase, migrar de múltiples `useState` a un reductor centralizado (`useReducer`) consolidaría el flujo de acciones (`DISPATCH_SUBIR_PUNTO`, `DISPATCH_ACTUALIZAR_NOTA`).
2. **Persistencia de Datos (`localStorage` / API Backend):**
   Actualmente los datos residen en memoria volátil; añadir un efecto de sincronización con `localStorage` permitiría conservar las modificaciones al recargar el navegador.
3. **Memoización con `React.memo`:**
   Envolver `FilaAlumno` en `React.memo` evitaría que las 20 filas se re-rendericen cuando solo se edita la nota de un alumno concreto.
4. **Tipado Estático con TypeScript:**
   Migrar a ficheros `.tsx` agregando interfaces estrictas (`interface Alumno { id: number; nombre: string; nota: number }`) para detectar errores de tipos en tiempo de compilación.

---

## 3. Respuesta a la Pregunta (b): ¿Ha utilizado una instrucción similar a `[mostrar_alumno(alumno, i) for i, alumno in enumerate(alumnos)]`?

### **SÍ, absolutamente.**

En el componente `src/vistas/TablaAlumnos.jsx` se utiliza de forma directa y explícita la siguiente instrucción:

```jsx
{alumnos.map((alumno, index) => (
  <FilaAlumno
    key={alumno.id}
    alumno={alumno}
    index={index}
    onActualizarNota={onActualizarNota}
  />
))}
```

### Tabla Comparativa de Correspondencia:

| Concepto | En Python (Ejercicio del profesor) | En React / JavaScript (Ejercicio 4) |
| :--- | :--- | :--- |
| **Fuente de datos iterable** | `alumnos` (lista de datos) | `alumnos` (array de objetos) |
| **Obtención de índice y elemento** | `for i, alumno in enumerate(alumnos)` | `.map((alumno, index) => ...)` |
| **Función de presentación de la vista** | `mostrar_alumno(alumno, i)` | `<FilaAlumno alumno={alumno} index={index} />` |
| **Sintaxis de mapeo** | Comprensión de lista `[...]` | Método funcional de orden superior `.map(...)` |
| **Valor devuelto por cada elemento** | `None` (en Python generaba `[None, None, ...]`) | Elemento del Virtual DOM (`ReactElement`) |
| **Uso del resultado del mapeo** | Se descartaba (solo importaba el `print`) | **React lo renderiza en pantalla dentro del DOM** |

### Reflexión Conceptual Clave:
En Python, usar `[mostrar_alumno(...) for ...]` exclusivamente para imprimir por consola era una **adaptación didáctica** para enseñar la sintaxis de mapeo.

En cambio, en **React**, `.map(...)` es el **estándar por excelencia de la industria**:
React requiere una función que reciba cada dato y retorne un componente visual. El array resultante de componentes JSX es consumido activamente por el motor de reconciliación de React para dibujar la interfaz en el navegador. Por tanto, la analogía planteada por el profesor encuentra su máxima y más pura expresión en React.

