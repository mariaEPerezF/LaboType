"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var Agenda_1 = require("./componentes/Agenda");
var Direccion_1 = require("./componentes/Direccion");
var Persona_1 = require("./componentes/Persona");
var Mail_1 = require("./componentes/Mail");
var Telefono_1 = require("./componentes/Telefono");
var readlineSync = require("readline-sync");

//
// Función para mostrar el menú y obtener la opción del usuario
//
function cargarMenu() {
    console.log("Opciones del Menu: ");
    console.log("1._ Insertar persona");
    console.log("2._ Consultar persona");
    console.log("3._ Modificar persona");
    console.log("4._ Total de personas registradas");
    console.log("5._ Salir");

    var opcion = readlineSync.questionInt("Seleccione una opcion: ");
   
    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        console.log(" --> Error!, Por favor seleccione una opcion válida.");
        return null;
    }

    return opcion;
}

//
// SELECCION DE CAMPO A MODIFICAR
//
function seleccionCampoEditar() {
    console.log("¿Que campo desea modificar?");

    console.log("1._ Email");
    console.log("2._ Telefono");
    console.log("3._ Dirección");
    console.log("4._ Salir");

    var opcion = readlineSync.questionInt("Ingrese una opcion: ");
  
    if (isNaN(opcion) || opcion < 1 || opcion > 3) {
        console.log(" --> Error!, Por favor seleccione una opcion válida.");
        return undefined;
    }

    return opcion;
}

function cargarPersonasSistema() {
    miAgenda.mostrarTodas();
}

//Carga de Usuarios
function PersonasPrecargadas() {

    var dir1Per1 = new Direccion_1.Direccion(1,"Gran Via",23,"15910","Barcelona","Cataluña");
    var cor1Per1 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "maprea@gmail.com");
    var tel1Per1 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 689456211);
    
    var per1 = new Persona_1.Persona( "Mari","Brea","49667893z",23, new Date("1996-01-27"), "Azul", "M",[dir1Per1],[cor1Per1],[tel1Per1]," Primera persona");
    miAgenda.agregarPersona(per1);

 
    var dir1Per2 = new Direccion_1.Direccion(2,"Avenida Camelias",80,"85412","Sevilla","Andalucia");
    var cor1Per2 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "camelias@gmail.com");
    var cor2Per2 = new Mail_1.Mail(Mail_1.EmailType.EMPRESA, "2camelias2@gmail.com");
    var tel1Per2 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 655124786);
    var per2 = new Persona_1.Persona("Maria Jose","Gomez","49667892z",68, new Date("2000-02-01"), "Verde", "M",[dir1Per2],[cor1Per2, cor2Per2],[tel1Per2],"Segunda Persona");
    miAgenda.agregarPersona(per2);
    
    
    var dir1Per3 = new Direccion_1.Direccion(3,"Rua Alonso Ojeda",18,"36207","Cee","A Coruña");
    var cor1Per3 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "miprimercorreo@gmail.com");
    var tel1Per3 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 745236895);
    var per3 = new Persona_1.Persona( "Jose Maria","Sanchez-Parra","33274766E",80, new Date("1965-04-24"), "Negro", "H",[dir1Per3],[cor1Per3],[tel1Per3],"Tercera Persona");
    miAgenda.agregarPersona(per3);
}

//Modificacion de datos
function modificarPersonas() {
    var newcor1Per1 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "nuevoCorreo@gmail.com");
    miAgenda.editarMail("49667890Z",0,newcor1Per1);
    var newtel1Per2 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 555777999);
    miAgenda.editarTelefono("59662890Z", 0, newtel1Per2);
    var newdir1Per3 = new Direccion_1.Direccion(3,"Plaza America",18,"36207","Cee","A Coruña");
    miAgenda.editarDireccion("49667899E", 0, newdir1Per3);
}


var miAgenda = new Agenda_1.Agenda();
// Pre-cargar 3 personas
PersonasPrecargadas();
console.log("Personas en el Sistema: ");
cargarPersonasSistema();
modificarPersonas();
console.log("Personas Modificadas: ");
cargarPersonasSistema();
var mostrarMenu = readlineSync.question("Seleccione Si (S) ó No (N) para ver nuevamente las opciones disponibles:");

if (mostrarMenu === 'S') {
    // Mostramos el menú y procesamos la opción del usuario
    var opcion = cargarMenu();

    while (opcion !== 5) {
        switch (opcion) {

            // Agregar persona
            case 1: 
                miAgenda.agregarPersona();
                console.log("Persona agregada :");
                break;

            // Consultar persona   
            case 2:
                var personaEncontrada = miAgenda.buscarPersona();
                personaEncontrada !== null ? console.log("Persona encontrada:", personaEncontrada) : console.log("Persona NO encontrada");
                break;
                
            // Modificar persona
            case 3: 
                var campoAModificar = seleccionCampoEditar();
                campoAModificar !== undefined ? miAgenda.editarPersona(campoAModificar) : console.log("Persona NO encontrada");
                break;
            
            //Ver total de personas 
            case 4:
                var numPersonas = miAgenda.contarPersonas();
                console.log("Total de Personas registradas : ", numPersonas, ".");
                break;
            default:
                console.log(" --> Error!, Por favor seleccione una opcion válida.");
                break;
        }
        opcion = cargarMenu();
    }
}
