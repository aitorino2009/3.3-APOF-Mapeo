"""
Ejercicio 1: Demostración y análisis del "Mapeo" en Python
Materia: Programación Funcional y Arquitectura MVC
"""

# MODELO - Datos
marcas = ["Seat", "Volkswagen", "Toyota", "Renault", "Fiat", "Peugeot"]


# VISTA - Mostrar
def mostrar_marca(marca: str) -> None:
    """Función de vista encargada de formatear e imprimir una marca."""
    print(f"Marca: {marca}")


# MAIN - Punto de entrada
def main() -> None:
    print("Lista de marcas de coches:")
    print("-" * 30)

    # Mapeo:
    # Se utiliza una comprensión de lista para recorrer cada elemento de 'marcas'
    # y aplicar la función 'mostrar_marca' a cada uno de ellos.
    [mostrar_marca(marca) for marca in marcas]


if __name__ == "__main__":
    main()
