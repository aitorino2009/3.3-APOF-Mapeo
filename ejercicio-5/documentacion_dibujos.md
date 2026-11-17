# Ejercicio 5: Algoritmo de Cruce y Torsión con Símbolos Gráficos (*) en React

## 1. El Algoritmo Base

El ejercicio parte del siguiente algoritmo en Python, representativo del **trenzado textil / encaje de bolillos**:

```python
def cruzar(par1, par2):
    print(f"   Cruzar {par1} ←→ {par2}")
    return par2, par1   # intercambian posición

def torcer(par):
    print(f"   Torcer {par} sobre sí mismo")

pares = ["A", "B", "C", "D"]

for repeticion in range(3):
    # Paso 1: Cruzar par 0 y 1
    pares[0], pares[1] = cruzar(pares[0], pares[1])
    # Paso 2: Torcer par 0
    torcer(pares[0])
    # Paso 3: Cruzar par 1 y 2
    pares[1], pares[2] = cruzar(pares[1], pares[2])
    # Paso 4: Torcer par 1
    torcer(pares[1])
    # Paso 5: Cruzar par 2 y 3
    pares[2], pares[3] = cruzar(pares[2], pares[3])
```

### Análisis Matemático y de Permutación:
- Se dispone de 4 elementos ordenados en posiciones `[0, 1, 2, 3]`.
- En cada ciclo (repetición), el elemento situado a la izquierda se cruza progresivamente hacia la derecha:
  - Inicial: `['A', 'B', 'C', 'D']`
  - Tras Repetición 1: `['B', 'C', 'D', 'A']` (el hilo `A` ha cruzado toda la urdimbre hasta la última posición).
  - Tras Repetición 2: `['C', 'D', 'A', 'B']`
  - Tras Repetición 3: `['D', 'A', 'B', 'C']`
  - (Una 4ª repetición retornaría al estado inicial cíclico `['A', 'B', 'C', 'D']`).

---

## 2. Implementación de la Aplicación en React

Se ha creado la aplicación web interactiva en `ejercicio-5/react-dibujos-simbolos/`, que ofrece:

### A. Galería de 5 Tipos de Dibujos con Asteriscos (`*`):
1. **1. Trayectoria de Hilos y Cruces (`*`):**
   - Muestra el diagrama de líneas donde se visualizan las posiciones de `(A)`, `(B)`, `(C)` y `(D)`, intercaladas con asteriscos `*` y cruces diagonales `\ /` que representan el cruce físico entre hilos.
2. **2. Malla Textil / Tejido de Bolillos (`*`):**
   - Genera la textura completa del tejido intercalando asteriscos y espacios que representan los nudos y los vanos de la tela tejida.
3. **3. Flor y Rombos de Encaje Geométrico (`*`):**
   - Dibuja figuras romboidales concéntricas formadas por asteriscos, que corresponden a los motivos decorativos clásicos del encaje.
4. **4. Pirámide Escalonada de Cruces (`*`):**
   - Representa la progresión de los niveles de cruce en forma piramidal simétrica.
5. **5. Ondas Trenzadas Intercaladas (`*`):**
   - Ilustra la forma de onda sinusoidal que describe cada hilo al entrelazarse de izquierda a derecha.

### B. Simulador Interactivo Paso a Paso:
- **Visualización gráfica en tiempo real:** Muestra las fichas de los 4 pares (`A`, `B`, `C`, `D`) y sus posiciones.
- **Control de ejecución:**
  - Botón *Ejecutar Paso*: Avanza de uno en uno a través de los 5 pasos del ciclo (mostrando cuál es el paso activo y la operación: `Cruzar` o `Torcer`).
  - Botón *Repetición Completa*: Ejecuta el ciclo entero de 5 pasos en un solo clic.
  - Botón *Reiniciar*: Devuelve los pares a su estado inicial.
- **Consola de registro de operaciones:** Registra con marcas temporales cada operación ejecutada.

### C. Personalización y Exportación:
- Posibilidad de alternar el símbolo gráfico (asterisco `*`, estrella `✦`, almohadilla `#`, etc.).
- Control deslizante para número de ciclos / repeticiones y tamaño de las figuras.
- Botón de un solo clic para **copiar el dibujo gráfico generado al portapapeles**.

---

## 3. Script de Referencia en Python

Para poder ejecutar y verificar el algoritmo directamente desde el terminal sin abrir el navegador, se incluye el script de consola:

```bash
python ejercicio-5/ejercicio_5_simulador.py
```

El script imprime por consola:
1. La traza original detallada de cada cruce y torsión.
2. El resultado tras las 3 repeticiones: `D A B C`.
3. Los 3 dibujos gráficos generados con asteriscos (`*`).
