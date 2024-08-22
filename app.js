const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    // Validar solo letras minúsculas sin acentos ni caracteres especiales
    if (/^[a-z\s]+$/.test(texto)) {
        let textoEncriptado = texto.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
        textoEncriptado.value = "";
        mensaje.style.backgroundImage = "none";
    } else {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
    }
}

function desencriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    // Validar solo letras minúsculas sin acentos ni caracteres especiales
    if (/^[a-z\s]+$/.test(texto)) {
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                      .replace(/imes/g, "i")
                                      .replace(/ai/g, "a")
                                      .replace(/ober/g, "o")
                                      .replace(/ufat/g, "u");
        mostrarResultado(textoDesencriptado);
    } else {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
    }
}

function mostrarResultado(texto) {
    const parrafoResultado = document.getElementById("textoResultado");
    parrafoResultado.innerText = texto;
    parrafoResultado.style.display = "block"; // Muestra el texto encriptado o desencriptado
}

function copiarTexto() {
    const textoParaCopiar = document.getElementById("textoResultado").innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar el texto: " + err);
    });
}