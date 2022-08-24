// Se definen las variables que van a almacenar los datos del formulario y la "llave de cierre"
let nameLogin = prompt("Ingresá tu nombre y apellido")
let mailLogin = prompt("Ingresá tu correo electrónico")
let passwordLogin = prompt("Ingresá tu contraseña")
let ageLogin = parseInt(prompt("Ingresá tu edad"))
let intentos = false;

// Funcion para el proceso que se ejecuta cuando el inicio de sesión es exitoso.
function successfulLogin() {
    alert("Felicitaciones " + nameLogin + ", ¡ingresaste correctamente!")
    intentos = true;
}

// si todos los datos son ingresados correctamente y la edad ingresada es mayor de 17, se ejecuta la función de inicio de sesión exitoso
if ((nameLogin && mailLogin && passwordLogin && parseInt(ageLogin) > 17)) {
    successfulLogin()
}

// mientras que nameLogin o mailLogin o passwordLogin sean desigual a nulo, ageLogin menor o igual que 17 y intentos desigual a true
// va a obtener un alert de error y se le va a volver a solicitar los datos en bucle.
while ((nameLogin != "" || mailLogin != "" || passwordLogin != "" || parseInt(ageLogin) <= 17) && intentos != true) {
    intentos = false;
    alert("Uno de los datos ingresados no es correcto o eres menor de edad. Vuelva a intentarlo");

    nameLogin = prompt("Ingresá tu nombre y apellido")
    mailLogin = prompt("Ingresá tu correo electrónico")
    passwordLogin = prompt("Ingresá tu contraseña")
    ageLogin = parseInt(prompt("Ingresá tu edad"))

}


// Se define el constructor que será utilizado para los ensambles
class Ensamble {
    constructor(procesador, gbRam, velocidadRam, hdd, ssd, grafica, fuenteCertificada, precio) {
        this.procesador = procesador;
        this.gbRam = gbRam;
        this.velocidadRam = velocidadRam;
        this.hdd = hdd;
        this.hdd = ssd;
        this.grafica = grafica;
        this.fuenteCertificada = fuenteCertificada;
        this.precio = Number(precio);
    }
}

// Registro de ensambles
const ensamble1 = new Ensamble("Ryzen 5 5600G", 16, "3200mhz", "1TB", "256GB", false, true, 90000)
const ensamble2 = new Ensamble("Athlon 3000G", 8, "3000mhz", "500GB", false, false, false, 60000)
const ensamble3 = new Ensamble("Intel Core i5-10400F", 16, "2666mhz", "1TB", "500GB", "RTX 2060", true, 120000)


// Se crea el constructor que va a contener a los clientes del local.
class Clientes {
    constructor(nombre, edad, dni, masDeUnaCompra) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.masDeUnaCompra = masDeUnaCompra;
    }
}

// Se registran nuevos clientes utilizando el constructor.
const cliente1 = new Clientes("Juan Ignacio", 18, 45992025, false)
const cliente2 = new Clientes("Pedro Altamirano", 25, 39027651, true)
const cliente3 = new Clientes("Maria Cuasimodo", 34, 27038741, false)
const cliente4 = new Clientes("Federico Pederal", 49, 18932111, true)


// Se crea la constante productosEnStock con el array que va a contener al mismo.
const productosEnStock = []

// Se carga el stock inicial para empezar a llevar un control
productosEnStock.push("Procesadores", "Rams DDR4", "SSD", "HDD", "Fuentes certificadas", "Graficas")
// Se solicita la visualización del stock mediante consola
console.log(productosEnStock)

// Aumentan las ventas en gráficas y se acaba el stock, por lo tanto, se elimina "Graficas" del stock mediante uso de .pop
productosEnStock.pop()
console.log(productosEnStock)



