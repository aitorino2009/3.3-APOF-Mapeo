"""
Ejercicio 3: "Subir la nota a todos +1"
Uso de funciones puras, mapeo y comparativa de sintaxis imperativa vs declarativa.
"""

from typing import List

# MODELO - Datos iniciales de los 8 alumnos
notas: List[int] = [4, 7, 5, 9, 3, 6, 8, 2]


# MODELO / LÓGICA DE NEGOCIO - Función pura de transformación
def subir_un_punto(lista_notas: List[int]) -> List[int]:
    """
    Función pura: recibe una lista de notas y devuelve una NUEVA lista
    con 1 punto sumado a cada nota, sin modificar la lista original.
    """
    return [nota + 1 for nota in lista_notas]


# VISTA - Funciones de visualización y presentación
def mostrar_originales_y_subidas(originales: List[int], subidas: List[int]) -> None:
    """Muestra la comparativa de las notas originales y las notas aumentadas."""
    print(f"Notas originales:  {originales}    Notas con +1 punto: {subidas}")
    print()


def mostrar_un_alumno(numero_alumno: int, nota: int) -> None:
    """Función de vista para imprimir individualmente el alumno y su nota."""
    print(f"Alumno {numero_alumno}: {nota}")


def mostrar_con_alumno(lista_notas: List[int]) -> None:
    """
    Opción 2: Implementación con la sintaxis de mapeo [función for in ].
    Aplica la función de presentación a cada elemento indexado con enumerate.
    """
    [mostrar_un_alumno(i + 1, nota) for i, nota in enumerate(lista_notas)]


# =====================================================================
# CÓDIGO OBLIGATORIO INDICADO EN EL ENUNCIADO
# =====================================================================
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


if __name__ == "__main__":
    main()

