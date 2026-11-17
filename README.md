# 🚀 Práctica Completa: Mapeo Funcional en Python y Desarrollo de Aplicaciones en React (MVC)

Este repositorio contiene la resolución integral, rigurosa y documentada de los **5 ejercicios** de la práctica de Programación Funcional, Mapeo (*Mapping*), Arquitectura MVC y desarrollo frontend moderno con **Vite + React**.

El proyecto ha sido desarrollado siguiendo las **mejores prácticas de ingeniería de software**:
- **Flujo de trabajo Git profesional:** Creación de ramas dedicadas (`feature/...`) para cada ejercicio, commits semánticos en castellano y fusión (*merge*) limpia en la rama principal `main`.
- **Arquitectura MVC (Modelo - Vista - Controlador):** Separación estricta entre el estado/lógica de negocio pura, la capa de presentación y los controladores.
- **Paradigma Declarativo y Funcional:** Inmutabilidad estricta, funciones puras, uso extensivo de transformaciones (`map`, `filter`, `reduce`) y eliminación de efectos secundarios ocultos.
- **Aplicaciones React Reales y Ligeras:** Dos proyectos completos desarrollados con Vite, con estilos limpios sin dependencias pesadas innecesarias y listos para producción.

---

## 🗂️ Estructura del Repositorio

```text
MaPeo/
├── .gitignore
├── README.md                                # Documentación global detallada
├── package.json                            # Scripts de orquestación raíz
│
├── ejercicio-1/                             # EJERCICIO 1: Análisis técnico del Mapeo
│   ├── ejercicio_1_mapeo.py                # Script ejecutable en Python
│   └── explicacion_mapeo.md                # Explicación teórica exhaustiva
│
├── ejercicio-2/                             # EJERCICIO 2: Frutas favoritas
│   ├── ejercicio_2_frutas.py               # Función mostrar_fruta y mapeo en una línea
│   └── respuestas_preguntas.md             # Respuestas detalladas a las 5 preguntas
│
├── ejercicio-3/                             # EJERCICIO 3: Subir la nota a todos +1
│   ├── ejercicio_3_notas.py                # Código respetando la estructura obligatoria
│   └── respuestas_preguntas.md             # Comparativa crítica: Bucle for vs Mapeo
│
├── ejercicio-4/                             # EJERCICIO 4: React MVC para 20 Alumnos
│   ├── analisis_y_respuestas.md            # Respuestas a las preguntas metodológicas (a y b)
│   └── react-alumnos/                      # Proyecto completo Vite + React
│       ├── src/
│       │   ├── modelo/alumnosModelo.js     # Modelo: 20 alumnos y funciones puras
│       │   ├── controlador/useAlumnosControlador.js  # Controlador Hook
│       │   ├── vistas/                     # Componentes: Menú, Tarjetas, Tabla, Fila
│       │   ├── App.jsx                     # Menú de operaciones y dashboard
│       │   └── App.css                     # Estilos visuales y diseño responsive
│       └── package.json
│
└── ejercicio-5/                             # EJERCICIO 5: Algoritmo de Cruces y Dibujos (*)
    ├── ejercicio_5_simulador.py            # Simulador de consola con gráficos en Python
    ├── documentacion_dibujos.md            # Documentación del algoritmo textil y bolillos
    └── react-dibujos-simbolos/             # Aplicación interactiva en Vite + React
        ├── src/
        │   ├── modelo/algoritmoBolillos.js # Algoritmo de cruzar/torcer y generadores (*)
        │   ├── vistas/                     # Controles, Visor Terminal y Simulador en vivo
        │   ├── App.jsx                     # Galería de 5 patrones gráficos con asteriscos
        │   └── App.css                     # Tema moderno con terminal y glow
        └── package.json
```

---

## 📖 Resumen y Respuestas por Ejercicio

### 🔹 Ejercicio 1: ¿Qué trabajo hace el "Mapeo" de esa función?

En el código:
```python
[mostrar_marca(marca) for marca in marcas]
```
- **Recorrido secuencial:** Itera ordenadamente de izquierda a derecha sobre cada una de las 6 marcas de la lista.
- **Invocación funcional:** Por cada elemento, delega en la función de vista `mostrar_marca(marca)` la responsabilidad de formatear e imprimir en la consola (`stdout`).
- **Mecanismo en memoria:** La sintaxis `[...]` es una *comprensión de lista* (*list comprehension*). Dado que `mostrar_marca` no tiene sentencia `return`, retorna implícitamente `None`. Por lo tanto, Python genera temporalmente en memoria la lista `[None, None, None, None, None, None]`, la cual se descarta de inmediato por el recolector de basura al no estar asignada a ninguna variable.
- **Conexión didáctica:** Sirve de antesala conceptual al mapeo declarativo en interfaces gráficas modernas (como `coleccion.map(...)` en React).

---

### 🔹 Ejercicio 2: Mostrar frutas favoritas y Preguntas de Reflexión

Script implementado en [ejercicio-2/ejercicio_2_frutas.py](file:///c:/Users/AITORPORTALESCRESPI/OneDrive%20-%20CC%20Sant%20Josep%20Obrer%20I/Documentos/APOF/MaPeo/ejercicio-2/ejercicio_2_frutas.py):
```python
frutas = ["manzana", "plátano", "naranja", "pera", "kiwi", "fresa"]

def mostrar_fruta(fruta: str) -> None:
    print(f"Me gusta la fruta: {fruta}")

# Mapeo en una sola línea:
[mostrar_fruta(fruta) for fruta in frutas]
```

#### Respuestas a las Preguntas para Pensar:
1. **¿Cuántas veces se ejecutó `mostrar_fruta`? ¿Cómo lo sabes?**
   - **6 veces.** La lista contiene 6 elementos (`len(frutas) == 6`) y la comprensión recorre todos los elementos secuencialmente. En pantalla se comprueba al contar exactamente 6 líneas impresas.
2. **¿Qué pasa dentro de los corchetes `[ ... ]`? ¿Es una lista normal o es otra cosa?**
   - Es una **comprensión de listas** (*list comprehension*), una construcción sintáctica activa que evalúa el bucle interno y construye en memoria una nueva lista con los valores devueltos por la expresión (`[None, None, None, None, None, None]`).
3. **¿Por qué no guardamos el resultado en una variable como `resultado = [...]`?**
   - Porque la función solo persigue el **efecto secundario** de imprimir en pantalla. Como retorna `None`, la variable almacenaría una lista de valores nulos inútil, desperdiciando memoria.
4. **Si cambias el orden de las frutas en la lista, ¿qué pasa en la pantalla?**
   - La pantalla muestra los mensajes en el **nuevo orden exacto**, ya que las listas en Python son colecciones ordenadas e indexadas y la comprensión itera estrictamente de izquierda a derecha.
5. **¿Qué ocurriría si escribimos la línea sin corchetes (`mostrar_fruta(fruta) for fruta in frutas`)?**
   - Si se escribe como sentencia suelta, produce un error de sintaxis: `SyntaxError: invalid syntax`. Si se encerrase entre paréntesis `(...)`, crearía una **expresión generadora perezosa** (*lazy evaluation*), por lo que **no se imprimiría nada en pantalla** hasta que alguien iterase sobre el generador.

---

### 🔹 Ejercicio 3: "Subir la nota a todos +1"

Código ejecutado con fidelidad estricta al bloque obligatorio solicitado:
```python
def main():
    notas_subidas = subir_un_punto(notas)
    mostrar_originales_y_subidas(notas, notas_subidas)
    # Opción 1: bucle normal
    print("Versión con for clásico:")
    for i in range(len(notas_subidas)):
        print(f"Alumno {i+1}: {notas_subidas[i]}")
    print()
    # Opción 2: la sintaxis que queremos enseñar
    print("Versión con [función for in ]:")
    mostrar_con_alumno(notas_subidas)
```

#### Respuesta a la Pregunta (a): ¿Qué opción te parece "mejor"? ¿Por qué razón?
- **Desde la perspectiva didáctica y de desarrollo web frontend (React):**
  **La Opción 2 es superior.** Introduce el modelo mental declarativo: se descompone la presentación en una función pura reutilizable (`mostrar_un_alumno(i, nota)`) y se delega el recorrido a la operación de mapeo. Esta es exactamente la filosofía que rige en React (`alumnos.map(...)`).
- **Desde la perspectiva de Python puro en producción:**
  La Opción 1 tiene la ventaja de no crear estructuras intermedias de `None` en memoria. Sin embargo, su sintaxis `range(len(...))` es un antipatrón en Python moderno. La solución óptima y canónica en Python que une lo mejor de ambas opciones es:
  ```python
  for i, nota in enumerate(notas_subidas, start=1):
      mostrar_un_alumno(i, nota)
  ```

---

### 🔹 Ejercicio 4: Aplicación React de Gestión de Calificaciones (20 Alumnos)

Ubicada en [ejercicio-4/react-alumnos/](file:///c:/Users/AITORPORTALESCRESPI/OneDrive%20-%20CC%20Sant%20Josep%20Obrer%20I/Documentos/APOF/MaPeo/ejercicio-4/react-alumnos/).

#### Características Técnicas de la Aplicación:
- **Modelo:** 20 alumnos reales con funciones puras (`subirUnPuntoATodos`, `modificarNotaAlumno`, `asignarNotasAleatorias`, `calcularEstadisticas`, `filtrarAlumnos`, `ordenarAlumnos`).
- **Vista:** Componentes funcionales independientes (`MenuOperaciones`, `TarjetaEstadisticas`, `TablaAlumnos`, `FilaAlumno`).
- **Controlador:** Hook personalizado `useAlumnosControlador` que gestiona el estado inmutable y las acciones operativas.
- **Menú de operaciones:** La interfaz integra un menú de operaciones en cabecera para subir +1 punto, restablecer notas, generar valores aleatorios, filtrar por aprobados/suspensos y ordenar el listado.

#### Respuestas Metodológicas:
- **a) ¿Es un código bien estructurado? ¿Es mejorable?**
  - **Estructura:** Excelente. Cumple con la separación MVC, inmutabilidad funcional, principios de responsabilidad única y cero dependencias innecesarias (bundle ultra-ligero de 228 kB).
  - **Mejoras posibles:** En proyectos de mayor escala se podría incorporar un `useReducer` para flujos complejos de despachos, persistencia en `localStorage` y tipado estático con TypeScript.
- **b) ¿Ha utilizado una instrucción similar a `[mostrar_alumno(alumno, i) for i, alumno in enumerate(alumnos)]`?**
  - **SÍ.** En `TablaAlumnos.jsx` se utiliza la equivalencia directa en JSX:
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
    Con una ventaja capital: mientras que en Python generaba `None`, en React el mapeo devuelve componentes del Virtual DOM que React renderiza en la interfaz real del usuario.

---

### 🔹 Ejercicio 5: Algoritmo de Cruce y Torsión con Símbolos Gráficos (*)

Ubicado en [ejercicio-5/react-dibujos-simbolos/](file:///c:/Users/AITORPORTALESCRESPI/OneDrive%20-%20CC%20Sant%20Josep%20Obrer%20I/Documentos/APOF/MaPeo/ejercicio-5/react-dibujos-simbolos/) y acompañado por el script de consola [ejercicio-5/ejercicio_5_simulador.py](file:///c:/Users/AITORPORTALESCRESPI/OneDrive%20-%20CC%20Sant%20Josep%20Obrer%20I/Documentos/APOF/MaPeo/ejercicio-5/ejercicio_5_simulador.py).

#### El Algoritmo:
Simula el **encaje de bolillos y trenzado textil**:
- Operación `cruzar(par1, par2)`: Intercambia de posición dos pares adyacentes.
- Operación `torcer(par)`: Rota un par sobre sí mismo.
- En cada ciclo de 5 pasos, el par de la izquierda cruza progresivamente toda la urdimbre:
  `['A', 'B', 'C', 'D']` ➔ `['B', 'C', 'D', 'A']` ➔ `['C', 'D', 'A', 'B']` ➔ `['D', 'A', 'B', 'C']`.

#### La Aplicación en React Incluye:
1. **Galería de 5 tipos de dibujos geométricos generados con asteriscos (`*`):**
   - *Trayectoria de hilos y cruces:* Diagrama que muestra el camino físico y cruce de los hilos.
   - *Malla textil / tejido:* Entrelazado de densidad que simula la tela de encaje.
   - *Rombos y flores de encaje:* Figuras geométricas concéntricas con asteriscos.
   - *Pirámide escalonada de cruces:* Niveles simétricos de cruce.
   - *Ondas trenzadas intercaladas:* Ondulaciones periódicas sinusoidales.
2. **Simulador Interactivo en Vivo:**
   - Visualización de las fichas de los 4 pares `[A, B, C, D]`.
   - Ejecución paso a paso (resaltando qué paso toca: 1 al 5) o por repeticiones completas.
   - Historial de operaciones en tiempo real.
3. **Herramientas:** Selector de símbolo alternativo (`*`, `✦`, `★`, `#`), controles deslizantes de repetición y botón para **copiar el dibujo gráfico al portapapeles**.

---

## 💻 Instrucciones de Ejecución

### 1. Ejecutar los Scripts de Python

```bash
# Ejercicio 1:
python ejercicio-1/ejercicio_1_mapeo.py

# Ejercicio 2:
python ejercicio-2/ejercicio_2_frutas.py

# Ejercicio 3:
python ejercicio-3/ejercicio_3_notas.py

# Ejercicio 5 (Simulador y gráficos en consola):
python ejercicio-5/ejercicio_5_simulador.py
```

### 2. Ejecutar las Aplicaciones Web en React (Vite)

#### Desde la raíz del repositorio:
```bash
# Iniciar la aplicación del Ejercicio 4 (20 Alumnos):
npm run dev:alumnos

# Iniciar la aplicación del Ejercicio 5 (Dibujos con asteriscos):
npm run dev:simbolos
```

#### O accediendo directamente a cada carpeta:
```bash
# Ejercicio 4:
cd ejercicio-4/react-alumnos
npm run dev

# Ejercicio 5:
cd ejercicio-5/react-dibujos-simbolos
npm run dev
```

---

## 📤 Instrucciones para Vincular y Subir a GitHub

Para publicar este repositorio en tu cuenta de GitHub y entregar el enlace:

1. Crea un repositorio vacío en tu cuenta de [GitHub](https://github.com/new) (por ejemplo, con el nombre `MaPeo`).
2. En tu terminal, ejecuta los siguientes comandos:

```bash
# Añade el enlace remoto de tu repositorio en GitHub:
git remote add origin https://github.com/<TU_USUARIO_GITHUB>/MaPeo.git

# Sube la rama principal con todo el historial de ramas y commits:
git push -u origin main
```
