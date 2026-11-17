"""
Ejercicio 2: Mostrar frutas favoritas mediante Mapeo funcional
"""

# MODELO - Datos
frutas = ["manzana", "plátano", "naranja", "pera", "kiwi", "fresa"]


# VISTA - Función para presentar una fruta con formato amigable
def mostrar_fruta(fruta: str) -> None:
    """Recibe una fruta y la imprime con un mensaje formateado."""
    print(f"Me gusta la fruta: {fruta}")


# MAIN - Controlador y ejecución
def main() -> None:
    print("Listado de frutas favoritas de la clase:")
    print("=" * 40)

    # Una sola línea para mostrar todas las frutas de la lista usando mapeo:
    [mostrar_fruta(fruta) for fruta in frutas]


if __name__ == "__main__":
    main()

