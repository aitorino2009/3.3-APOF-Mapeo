# Ejercicio 3: Comparativa Crítica entre el Bucle Tradicional y el Mapeo

## 1. Código Analizado

```python
# Opción 1: bucle normal
print("Versión con for clásico:")
for i in range(len(notas_subidas)):
    print(f"Alumno {i+1}: {notas_subidas[i]}")

# Opción 2: la sintaxis que queremos enseñar
print("Versión con [función for in ]:")
mostrar_con_alumno(notas_subidas)
```

Donde `mostrar_con_alumno` está implementada mediante:
```python
def mostrar_con_alumno(lista_notas):
    [mostrar_un_alumno(i + 1, nota) for i, nota in enumerate(lista_notas)]
```

---

## 2. Respuesta a la Pregunta (a): ¿Qué opción te parece "mejor"? ¿Por qué razón?

La respuesta depende del contexto de evaluación: **didáctico/arquitectura moderna** frente a **idiomático de Python en producción**.

### Análisis de la Opción 1 (Bucle `for` clásico)

* **Ventajas:**
  1. **Uso de memoria óptimo:** No crea ninguna lista intermedia en memoria; simplemente itera elemento a elemento y ejecuta el `print`.
  2. **Intención de efecto secundario explícita:** En Python, los bucles `for` existen expresamente para ejecutar efectos secundarios (como imprimir por pantalla o escribir en disco).

* **Inconvenientes:**
  1. **Antipatrón de indexación en Python (`range(len(...))`):** En Python idiomático, iterar usando `range(len(lista))` y acceder luego por corchete `lista[i]` se considera poco elegante y propenso a errores fuera de rango (*off-by-one errors*). En su lugar debería usarse `enumerate()`.
  2. **Alto acoplamiento:** El bucle mezcla dentro de su propio bloque la lógica de iteración con la lógica de formateo y visualización (`print(f"Alumno {i+1}: ...")`), dificultando la reutilización del formateo en otras partes del programa.

---

### Análisis de la Opción 2 (Sintaxis `[función for in ]` / Mapeo)

* **Ventajas:**
  1. **Modularidad y Separación de Responsabilidades:** Separa claramente *cómo se formatea un alumno* (delegado en la función pura de vista `mostrar_un_alumno`) de *cómo se recorre la colección*.
  2. **Enfoque Declarativo vs. Imperativo:** Permite expresar **qué** queremos hacer con cada elemento ("a cada alumno, aplícale su función de visualización") en lugar de detallar **cómo** manipular índices y contadores.
  3. **Puente directo hacia React y tecnologías web contemporáneas:** Este patrón es la base del desarrollo frontend moderno (con `.map()` en JavaScript y JSX de React). Enseña al alumno a concebir las vistas como funciones que reciben un dato y devuelven una representación.

* **Inconvenientes técnicos en Python:**
  1. La comprensión de listas construye en memoria una lista de valores `None` (`[None, None, None, ...]`) que se descarta inmediatamente tras la ejecución.

---

## 3. Veredicto y Conclusión

- **Desde el punto de vista didáctico y de preparación para el desarrollo frontend (React):**
  **La Opción 2 es indudablemente mejor.** Cambia el modelo mental del estudiante de la programación imperativa paso a paso a la programación declarativa basada en componentes y funciones especializadas. Prepara de forma directa para entender cómo React transforma colecciones de datos en interfaces de usuario (`datos.map(item => <Componente />)`).

- **Si estuviéramos en Python puro de producción profesional:**
  La solución óptima combinaría lo mejor de ambos mundos (función modular + iterador limpio sin memoria extra):
  ```python
  for i, nota in enumerate(notas_subidas, start=1):
      mostrar_un_alumno(i, nota)
  ```
