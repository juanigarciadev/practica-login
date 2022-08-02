// Práctica login

// Se define la constante con parametros que más adelante van a ser definidos
const continuarFormulario = (pregunta, si, no) => {
    if (confirm(pregunta)) {
        si()
    } else {
        no()
    }
}

// Se definen las funciones que más adelante van a ser las reemplazantes de los parámetros (si, no)
function resSi() {
    alert("Esperamos que disfrutes tu estadía :)")
}
function resNo() {
    alert("Apreciamos tu visita, ¡esperamos que cambies de opinión pronto! :)")
    close()
}

// Se hace la pregunta dándole valor a los parámetros ingresados en la constante continuarFormulario
// cambiando los parámetros (respuesta, si, no) por el string y las funciones resSi y resNo
continuarFormulario("Estás por rellenar un formulario para iniciar sesión, ¿desea continuar?",resSi,resNo)



// Se definen las variables que van a almacenar los datos del formulario y la "llave de cierre"
let nameLogin = prompt("Ingresá tu nombre y apellido")
let mailLogin = prompt("Ingresá tu correo electrónico")
let passwordLogin = prompt("Ingresá tu contraseña")
let ageLogin = parseInt(prompt("Ingresá tu edad"))
let intentos = false;

// Funcion para el proceso que se ejecuta cuando el inicio de sesión es exitoso.
function successfulLogin() {
    alert("Felicitaciones " + nameLogin + ", ¡ingresaste correctamente!")
    intentos=true;
}

// mientras que nameLogin o mailLogin o passwordLogin sean desigual a nulo, ageLogin menor o igual que 17 y intentos desigual a true
// va a obtener un alert de error y se le va a volver a solicitar los datos en bucle.
while((nameLogin != "" || mailLogin != "" || passwordLogin != "" || parseInt(ageLogin) <= 17) && intentos != true) {
    intentos = false;
    alert("Uno de los datos ingresados no es correcto o eres menor de edad. Vuelva a intentarlo");

    nameLogin = prompt("Ingresá tu nombre y apellido")
    mailLogin = prompt("Ingresá tu correo electrónico")
    passwordLogin = prompt("Ingresá tu contraseña")
    ageLogin = parseInt(prompt("Ingresá tu edad"))

        // si todos los datos son ingresados correctamente y la edad ingresada es mayor de 17, se ejecuta la función de inicio de sesión exitoso
    if((nameLogin && mailLogin && passwordLogin && parseInt(ageLogin) > 17)) {
        successfulLogin()
    }
}