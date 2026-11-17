# Ejercicio 2: Preguntas para Pensar y Respuestas Razonadas

A continuación se presentan las respuestas detalladas a las preguntas planteadas sobre el código de frutas:

```python
frutas = ["manzana", "plátano", "naranja", "pera", "kiwi", "fresa"]

def mostrar_fruta(fruta):
    print(f"Me gusta la fruta: {fruta}")

[mostrar_fruta(fruta) for fruta in frutas]
```

---

### 1. ¿Cuántas veces se ejecutó la función `mostrar_fruta`? ¿Cómo lo sabes?

**Respuesta:**
Se ejecutó exactamente **6 veces**.

**¿Cómo lo sabemos?**
1. **Por el tamaño de la estructura de datos:** La lista `frutas` contiene 6 elementos (`len(frutas) == 6`). La comprensión de lista realiza un recorrido secuencial exhaustivo (uno a uno) de todos los elementos presentes en el iterable, sin omitir ni duplicar ninguno.
2. **Por la evidencia en la salida estándar:** En la consola aparecen exactamente 6 líneas impresas con el prefijo `"Me gusta la fruta: ..."` correspondiente a cada una de las 6 frutas de la lista.

---

### 2. ¿Qué pasa dentro de los corchetes `[ ... ]`? ¿Es una lista normal o es otra cosa?

**Respuesta:**
Dentro de los corchetes hay una **comprensión de listas** (*list comprehension*), no una lista estática convencional:

- Una lista normal almacena valores literales previamente calculados, por ejemplo: `["a", "b", "c"]`.
- La expresión `[mostrar_fruta(fruta) for fruta in frutas]` es una **instrucción sintáctica activa** que ejecuta un bucle interno.
- En cada iteración:
  1. Extrae el siguiente elemento de `frutas`.
  2. Evalúa la expresión a la izquierda: `mostrar_fruta(fruta)`.
  3. Almacena el valor retornado por esa llamada dentro de la nueva lista que se está construyendo.
- Como `mostrar_fruta` no tiene `return`, retorna implícitamente `None`. Por ende, el resultado final generado dentro de los corchetes en memoria es:
  ```python
  [None, None, None, None, None, None]
  ```

---

### 3. ¿Por qué no guardamos el resultado en una variable como `resultado = [...]`?

**Respuesta:**
Porque el objetivo de esta instrucción es únicamente su **efecto secundario** (*side effect*), que consiste en escribir texto en la pantalla (`print`), y no obtener datos calculados.

- Si hiciéramos `resultado = [mostrar_fruta(fruta) for fruta in frutas]`, la variable `resultado` contendría:
  ```python
  [None, None, None, None, None, None]
  ```
- Almacenar una lista llena de valores `None` ocuparía memoria de forma innecesaria y no aportaría ningún valor semántico al programa, ya que nadie va a utilizar dicha lista posteriormente. Por eso se deja la expresión sin asignar para que el recolector de basura de Python libere inmediatamente la memoria.

---

### 4. Si cambias el orden de las frutas en la lista, ¿qué pasa en la pantalla?

**Respuesta:**
El orden de las líneas impresas en la pantalla **cambia exactamente en la misma secuencia** en que se hayan ordenado los elementos en la lista.

**Razón técnica:**
En Python, el tipo `list` es una secuencia **ordenada** e indexada. La comprensión de listas itera estrictamente de izquierda a derecha (desde el índice `0` hasta el índice `n - 1`). Por lo tanto, la función `mostrar_fruta` se invoca en el orden temporal exacto en el que aparecen los elementos en la lista origen.

Por ejemplo, si la lista fuera:
```python
frutas = ["fresa", "kiwi", "manzana"]
```
La pantalla mostraría primero fresa, luego kiwi y al final manzana.

---

### 5. ¿Qué ocurriría si escribimos la línea sin corchetes?
*Ejemplo:* `mostrar_fruta(fruta) for fruta in frutas`

**Respuesta:**
Ocurren dos escenarios según el contexto sintáctico:

1. **Si se escribe sola como una sentencia independiente:**
   ```python
   mostrar_fruta(fruta) for fruta in frutas
   ```
   Python lanzará un error de sintaxis en tiempo de compilación/parseo:
   ```text
   SyntaxError: invalid syntax
   ```
   La cláusula `... for ... in ...` solo es válida en Python dentro de delimitadores (corchetes `[...]`, llaves `{...}` o paréntesis `(...)`) o como argumento directo de una función que acepte un generador.

2. **Si se escribe entre paréntesis redondos `(...)`:**
   ```python
   (mostrar_fruta(fruta) for fruta in frutas)
   ```
   Se crearía una **expresión generadora** (*generator expression*). Los generadores en Python funcionan bajo el principio de **evaluación perezosa** (*lazy evaluation*): **no ejecutan el código de su interior hasta que alguien consuma sus valores** (por ejemplo, mediante la función `next()`, un bucle `for` o envolviéndolos en `list()`).
   Por lo tanto, **¡no se imprimiría absolutamente nada en la pantalla!** hasta que se iterase activamente sobre el generador.

