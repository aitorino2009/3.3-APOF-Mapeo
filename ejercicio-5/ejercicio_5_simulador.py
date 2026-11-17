"""
Ejercicio 5: Algoritmo de Cruce y Torsión (Encaje de Bolillos / Trenzado)
Simulador en Python con generación de dibujos gráficos basados en símbolos (*).
"""

from typing import List, Tuple


def cruzar(par1: str, par2: str) -> Tuple[str, str]:
    """Intercambia la posición de dos pares (cruce)."""
    print(f"   Cruzar {par1} ←→ {par2}")
    return par2, par1


def torcer(par: str) -> None:
    """Aplica una torsión sobre sí mismo a un par."""
    print(f"   Torcer {par} sobre sí mismo")


def dibujar_trenza_asteriscos(filas_historial: List[List[str]]) -> None:
    """
    Genera un dibujo gráfico con asteriscos (*) representando
    la trayectoria y cruce de los 4 hilos (A, B, C, D).
    """
    print("\n" + "=" * 50)
    print("DIBUJO GRÁFICO 1: TRAYECTORIA DE HILOS CON ASTERISCOS (*)")
    print("=" * 50)

    for i, estado in enumerate(filas_historial):
        linea = "    "
        for p in estado:
            linea += f"[{p}]  *  "
        print(f"Fila {i+1:02d}: {linea}")
        if i < len(filas_historial) - 1:
            print("         *   *   *   *")
            print("          \\ /     \\ / ")
            print("           *       *  ")


def dibujar_malla_textil(repeticiones: int) -> None:
    """
    Genera un patrón textil de encaje repetitivo compuesto de asteriscos (*).
    """
    print("\n" + "=" * 50)
    print("DIBUJO GRÁFICO 2: MALLA TEXTIL / ENCAJE CON ASTERISCOS (*)")
    print("=" * 50)

    patron = [
        "      *       *       *       *      ",
        "     * *     * *     * *     * *     ",
        "    *   *   *   *   *   *   *   *    ",
        "   *  *  * *  *  * *  *  * *  *  *   ",
        "    *   *   *   *   *   *   *   *    ",
        "     * *     * *     * *     * *     ",
    ]

    for r in range(repeticiones):
        print(f"--- Ciclo de Tejido #{r + 1} ---")
        for linea in patron:
            print(linea)


def dibujar_rombo_central(tamano: int = 5) -> None:
    """
    Genera una figura geométrica de rombo/flor mediante asteriscos (*),
    símbolo clásico generado por el cruce convergente y divergente.
    """
    print("\n" + "=" * 50)
    print("DIBUJO GRÁFICO 3: ROMBO DE CRUCE GEOMÉTRICO (*)")
    print("=" * 50)

    # Mitad superior
    for i in range(tamano):
        espacios = " " * (tamano - i - 1)
        asteriscos = "* " * (i + 1)
        print("         " + espacios + asteriscos)
    # Mitad inferior
    for i in range(tamano - 2, -1, -1):
        espacios = " " * (tamano - i - 1)
        asteriscos = "* " * (i + 1)
        print("         " + espacios + asteriscos)


def main() -> None:
    # Estado inicial de los pares (posición de izquierda a derecha)
    pares: List[str] = ["A", "B", "C", "D"]
    historial: List[List[str]] = [list(pares)]

    print("Estado inicial: ", " ".join(pares))
    print("-" * 40)

    # Patrón básico repetido 3 veces (como si hiciéramos 3 "flores" pequeñas)
    for repeticion in range(3):
        print(f"\nRepetición {repeticion+1}:")

        # Paso 1
        pares[0], pares[1] = cruzar(pares[0], pares[1])
        # Paso 2
        torcer(pares[0])
        # Paso 3
        pares[1], pares[2] = cruzar(pares[1], pares[2])
        # Paso 4
        torcer(pares[1])
        # Paso 5
        pares[2], pares[3] = cruzar(pares[2], pares[3])

        historial.append(list(pares))
        print("   Estado actual: ", " ".join(pares))

    print("\nResultado final después de 3 repeticiones:")
    print(" ".join(pares))

    # Renderizar los dibujos gráficos con asteriscos (*)
    dibujar_trenza_asteriscos(historial)
    dibujar_malla_textil(3)
    dibujar_rombo_central(6)


if __name__ == "__main__":
    main()

