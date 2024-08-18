function encriptar() {
    let tituloMensaje = document.getElementById("titulo-mensaje").value;
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/a/gi, "ai")
        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length !=0) {

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent="Texto encriptado con exito";
        parrafo.textContent="";
        muñeco.src=".\imagenes\Binario.jpeg";
    }   else {
        muñeco.src=".\imagenes\alerta.png";
        tituloMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar el texto");
    }
    
}