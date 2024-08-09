const textArea = document.querySelector(".Text-Area");
const resultado = document.querySelector(".Resultado");

// Función que se llama cuando se hace clic en el botón de encriptar
function botonEncriptar() {
    const mensajeEncriptado = encriptar(textArea.value);
    resultado.value = mensajeEncriptado.toLowerCase();
    resultado.style.backgroundImage = "none";
    textArea.value = "";

}

// Función que se llama cuando se hace clic en el botón de desencriptar
function botonDesencriptar() {
    const mensajeDesencriptado = desencriptar(textArea.value);
    resultado.value = mensajeDesencriptado.toLowerCase();
    textArea.value = "";
    
    // Reiniciar la interfaz después de 15 segundos
    setTimeout(() => {
        resetearInterfaz();
    }, 15000); // 15000 ms = 15 segundos

    
}

// Función para reiniciar la interfaz
function resetearInterfaz() {
    // Limpiar el área de texto y el resultado
    textArea.value = "";
    resultado.value = "";

    // Restaurar la imagen de fondo del área de resultado
    resultado.style.backgroundImage = "url('./Imagenes/Muñeco.png')";
}

// Función para encriptar el texto
function encriptar(textoEncriptado) {
    // Definir la matriz de códigos de encriptación
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    // Reemplazar los caracteres de acuerdo a la matriz de códigos
    for (let i = 0; i < matrizCodigo.length; i++) {
        const [caracter, reemplazo] = matrizCodigo[i];
        const regex = new RegExp(caracter, 'g'); // Crear una expresión regular global
        textoEncriptado = textoEncriptado.replace(regex, reemplazo);
    }

    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(textoDesencriptado) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    // Recorremos la matriz de códigos en orden inverso
    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        const [caracter, reemplazo] = matrizCodigo[i];
        const regex = new RegExp(reemplazo, 'g'); // Crear una expresión regular global
        textoDesencriptado = textoDesencriptado.replace(regex, caracter);
    }

    return textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function botonCopiar() {
    navigator.clipboard.writeText(resultado.value).then(() => {
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para pegar el texto desde el portapapeles
function botonPegar() {
    navigator.clipboard.readText().then(text => {
        textArea.value = text;
    }).catch(err => {
        console.error('Error al pegar el texto: ', err);
    });
}