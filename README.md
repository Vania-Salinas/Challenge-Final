Descripción
  "Challenge Alura Latam" es una aplicación web que permite a los usuarios encriptar y desencriptar texto. La aplicación también ofrece opciones para copiar y pegar texto, proporcionando una solución sencilla para trabajar con texto codificado. Está diseñada para funcionar con letras minúsculas y sin acentos.
Funcionalidades
  Entrada de Texto: Los usuarios pueden ingresar texto en un área de texto.
  Encriptar: Convierte el texto ingresado en una versión encriptada utilizando un conjunto específico de reemplazos.
  Desencriptar: Revertir el texto encriptado a su forma original utilizando los mismos reemplazos en orden inverso.
  Copiar Resultado: Copia el texto encriptado o desencriptado al portapapeles.
  Pegar Texto: Permite pegar texto desde el portapapeles en el área de entrada.
  Estilo y Diseño
La aplicación utiliza una hoja de estilos CSS (style.css) que incluye:
  Fuente: Se emplea la fuente "Inter" desde Google Fonts para una tipografía moderna y legible.
  Estilo General: Fondo blanco con texto en color oscuro (#000000) y botones en un color azul (#007bff) con efectos de transición para mejorar la interacción del usuario.
  Diseño Responsivo: El diseño se adapta a diferentes tamaños de pantalla:
  Pantallas grandes: El diseño se centra y utiliza márgenes y espaciado adecuados para una visualización óptima.
  Pantallas medianas (<=768px): El diseño cambia a una disposición de columna y ajusta el tamaño de los elementos para una mejor legibilidad en dispositivos más pequeños.
  Pantallas pequeñas (<=480px): Los elementos se ajustan aún más para maximizar el espacio disponible y asegurar una buena usabilidad en dispositivos móviles.
Funcionalidades del Script app.js
  Encriptar Texto:
    Función: botonEncriptar()
    Descripción: Encripta el texto ingresado utilizando una matriz de códigos y muestra el resultado en el área de resultados.
    Método: Reemplaza caracteres específicos por secuencias definidas como "enter", "imes", "ai", "ober", y "ufat".
  Desencriptar Texto:
    Función: botonDesencriptar()
    Descripción: Desencripta el texto encriptado utilizando la matriz de códigos en orden inverso y muestra el resultado en el área de resultados. La interfaz se reinicia automáticamente después de 15 segundos.
  Reiniciar Interfaz:
    Función: resetearInterfaz()
    Descripción: Limpia el área de texto y el área de resultados, y restaura la imagen de fondo en el área de resultados.
  Copiar Texto:
    Función: botonCopiar()
    Descripción: Copia el contenido del área de resultados al portapapeles.
  Pegar Texto:
    Función: botonPegar()
    Descripción: Pega el texto desde el portapapeles en el área de texto de entrada.
