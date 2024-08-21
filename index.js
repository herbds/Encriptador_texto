function encriptar() {
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagen_encriptado = document.getElementById("imagen_encriptado");
    let texto_copia = document.getElementById("texto_copia");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/a/gi, "ai")
        .replace(/u/gi, "ufat")
        .replace(/ñ/gi, "ñolu")
        .replace(/ó/gi, "oliva")
        .replace(/ú/gi, "urs")
        .replace(/á/gi, "anu")
        .replace(/é/gi, "emi")
        .replace(/í/gi, "ipq")
        ;

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        imagen_encriptado.style.display = "none";  // Ocultar la imagen
        texto_copia.style.display = "block";       // Mostrar el textarea
        texto_copia.value = textoCifrado;          // Rellenar el textarea con el texto cifrado
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "";
        imagen_encriptado.style.display = "block";  // Mostrar la imagen
        texto_copia.style.display = "none";         // Ocultar el textarea
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagen_encriptado = document.getElementById("imagen_encriptado");
    let texto_copia = document.getElementById("texto_copia");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ai/gi, "a")
        .replace(/ufat/gi, "u")
        .replace(/ñ/gi, "ñolu")
        .replace(/ó/gi, "oliva")
        .replace(/ú/gi, "urs")
        .replace(/á/gi, "anu")
        .replace(/é/gi, "emi")
        .replace(/í/gi, "ipq")
        ;

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        imagen_encriptado.style.display = "none";  // Ocultar la imagen
        texto_copia.style.display = "block";       // Mostrar el textarea
        texto_copia.value = textoCifrado;          // Rellenar el textarea con el texto desencriptado
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "";
        imagen_encriptado.style.display = "block";  // Mostrar la imagen
        texto_copia.style.display = "none";         // Ocultar el textarea
    }
}

function copiar() {
    let texto_copia = document.getElementById("texto_copia"); // Obtener el textarea con el texto cifrado

    if (texto_copia.value) { // Verificar si hay texto en el textarea
        navigator.clipboard.writeText(texto_copia.value)

    }    
}

document.getElementById('texto').oncontextmenu = function() {
    return false; // Bloquea el menú contextual (clic derecho)
};

document.getElementById('texto_copia').oncontextmenu = function() {
    return false; // Bloquea el menú contextual (clic derecho)
};

document.getElementById('texto').addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'x')) {
        event.preventDefault(); // Bloquea Ctrl+C y Ctrl+X
    }
});

document.getElementById('texto_copia').addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'x')) {
        event.preventDefault(); // Bloquea Ctrl+C y Ctrl+X
    }
});