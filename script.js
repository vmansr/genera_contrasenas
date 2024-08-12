function generatePassword() {
    // Función principal para generar la contraseña
    const length = document.getElementById('password-length').value;
    // Obtiene la longitud deseada de la contraseña
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    // Obtiene las opciones seleccionadas

    let charset = "abcdefghijklmnopqrstuvwxyz";
    // Conjunto base de caracteres (minúsculas)
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // Añade caracteres adicionales según las opciones

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    // Genera la contraseña aleatoria

    document.getElementById("password").value = password;
    // Muestra la contraseña generada en el campo de texto
}

function copyPassword() {
    // Función para copiar la contraseña al portapapeles
    const passwordField = document.getElementById("password");
    passwordField.select();
    // Selecciona el texto del campo de contraseña
    document.execCommand("copy");
    // Copia el texto seleccionado
    alert("Contraseña copiada al portapapeles");
    // Muestra una alerta de confirmación
}

// Generar una contraseña al cargar la página
window.onload = generatePassword;
// Llama a generatePassword cuando la página termina de cargar