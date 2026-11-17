# Ejercicio 1: Explicación Técnica y Conceptual del "Mapeo"

## 1. El Código Analizado

```python
# MODELO - Datos
marcas = ["Seat", "Volkswagen", "Toyota", "Renault", "Fiat", "Peugeot"]

# VISTA - Mostrar
def mostrar_marca(marca):
    print(f"Marca: {marca}")

# MAIN - Punto de entrada
def main():
    print("Lista de marcas de coches:")
    print("-" * 30)
    # Mapeo
    [mostrar_marca(marca) for marca in marcas]

if __name__ == "__main__":
    main()
```

---

## 2. ¿Qué trabajo hace exactamente el "Mapeo" en esta función?

La línea comentada como `# Mapeo`:

```python
[mostrar_marca(marca) for marca in marcas]
```

realiza las siguientes operaciones paso a paso:

### A. Mecanismo de Iteración y Aplicación Funcional
1. **Recorrido secuencial:** Evalúa la colección iterable `marcas` (compuesta por 6 cadenas de texto) elemento a elemento, de izquierda a derecha.
2. **Asignación temporal:** En cada iteración asigna el elemento actual a la variable local `marca` (`"Seat"`, luego `"Volkswagen"`, etc.).
3. **Invocación de la función (Mapeo):** Invoca a la función de la Vista `mostrar_marca(marca)` pasándole como argumento dicho valor.
4. **Efecto secundario (Side Effect):** La función `mostrar_marca` ejecuta `print(f"Marca: {marca}")`, enviando la cadena formateada a la salida estándar (`stdout`, la consola).

### B. Comportamiento en Memoria y Valor de Retorno
1. En Python, la sintaxis `[expresion for elemento in iterable]` es una **comprensión de lista** (*list comprehension*). Su objetivo original es construir una **nueva lista** donde cada posición contiene el resultado de evaluar `expresion`.
2. Dado que `mostrar_marca` no contiene una sentencia `return`, Python devuelve por defecto el valor especial `None`.
3. En consecuencia, el intérprete genera en memoria una lista de seis elementos `None`:
   ```python
   [None, None, None, None, None, None]
   ```
4. Puesto que este resultado no se asigna a ninguna variable ni se pasa a otra función, Python lo descarta de inmediato y libera esa memoria mediante el recolector de basura (*garbage collector*).

---

## 3. Relación con la Arquitectura MVC (Modelo - Vista - Controlador)

El código separa con claridad las tres capas:
- **Modelo (Datos):** La lista `marcas`, que representa el estado o la fuente de información de la aplicación.
- **Vista (Presentación):** La función `mostrar_marca`, cuya única responsabilidad es transformar un dato en una representación visual legible para el usuario.
- **Controlador / Punto de entrada (`main`):** Orquesta el flujo de ejecución, conectando el Modelo con la Vista mediante la operación de mapeo.

El mapeo actúa como el **puente declarativo**: toma los datos puros del Modelo y delega su renderizado a la Vista sin mezclar lógica de datos con lógica de presentación.

---

## 4. Comparativa: Paradigma Imperativo vs. Paradigma Declarativo / Funcional

### Opción A: Bucle clásico imperativo (Python estándar)
```python
for marca in marcas:
    mostrar_marca(marca)
```
- **Ventajas:** Es la convención estándar en Python (PEP 8 y *Zen of Python*: "Explicit is better than implicit"). Es directo, legible y no crea una lista intermedia innecesaria en memoria.

### Opción B: Comprensión de lista como mapeo (Código actual)
```python
[mostrar_marca(marca) for marca in marcas]
```
- **Propósito pedagógico:** Permite al alumno asimilar el concepto de **mapear** (`map`): aplicar una función a todos los elementos de un conjunto en una sola línea expresiva.
- **Matiz técnico:** En entornos de producción en Python, usar una comprensión de lista exclusivamente por sus efectos secundarios (`print`) se considera un *code smell* (antipatrón leve), ya que gasta memoria innecesaria creando una lista de `None`.

### Opción C: Función `map()` incorporada
```python
list(map(mostrar_marca, marcas))
```
- Aplica formalmente el orden superior funcional de Python, aunque también requiere forzar la evaluación (pues `map()` es un iterador perezoso).

---

## 5. Conexión directa con JavaScript y React

Este ejercicio es el antecedente directo de la sintaxis estándar utilizada en **React**:

```jsx
// En React (JSX):
{marcas.map((marca, index) => (
  <p key={index}>Marca: {marca}</p>
))}
```

En React, a diferencia de Python, el mapeo **sí devuelve algo útil**: una lista de elementos del Virtual DOM que React inserta directamente en la interfaz gráfica. Comprender el mapeo en Python facilita la transición inmediata a la programación declarativa moderna en el frontend.

