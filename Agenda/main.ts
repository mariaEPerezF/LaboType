import { Agenda }               from "./componentes/Agenda";
import { Telefono , PhoneType}  from './componentes/Telefono';
import { Mail, EmailType}       from './componentes/Mail';
import { Direccion }            from "./componentes/Direccion";
import { Persona}               from './componentes/Persona';
import * as readlineSync        from 'readline-sync';


function cargarMenu(): number | null {
    console.log("Opciones del Menu: ");
    console.log("1._ Insertar persona");
    console.log("2._ Consultar persona");
    console.log("3._ Modificar persona");
    console.log("4._ Total de personas registradas");
    console.log("5._ Salir");
  
    const opcion = readlineSync.questionInt("Seleccione una opcion: ");
  
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

  var opcion = readlineSync.questionInt("Seleccione una opcion: ");

  if (isNaN(opcion) || opcion < 1 || opcion > 3) {
      console.log(" --> Error!, Por favor seleccione una opcion válida.");
      return undefined;
  }

  return opcion;
}

  function cargarPersonasSistema(){
    miAgenda.mostrarTodas();
  }

  function PersonasPrecargadas() {
    
  
    let dir1Per1: Direccion = new Direccion(1,"Gran Via",23,"15910","Barcelona","Cataluña");
    let cor1Per1: Mail = new Mail( EmailType.PERSONAL, "maprea@gmail.com");
    let tel1Per1: Telefono = new Telefono(PhoneType.MOVIL, 689456211);

    let per1: Persona= new Persona( "Mari","Brea","49667893z",23, new Date("1996-01-27"), "Azul", "M",[dir1Per1],[cor1Per1],[tel1Per1]," Primera persona");
    miAgenda.agregarPersona(per1);


    let dir1Per2: Direccion = new Direccion(2,"Avenida Camelias",80,"85412","Sevilla","Andalucia");
    let cor1Per2: Mail = new Mail( EmailType.PERSONAL, "camelias@gmail.com");
    let cor2Per2: Mail = new Mail( EmailType.EMPRESA, "2camelias2@gmail.com");
    let tel1Per2: Telefono = new Telefono(PhoneType.MOVIL, 655124786);

    let per2: Persona= new Persona( "Maria Jose","Gomez","49667892z",68, new Date("2000-02-01"), "Verde", "M",[dir1Per2],[cor1Per2, cor2Per2],[tel1Per2],"Segunda Persona");
    miAgenda.agregarPersona(per2);


    let dir1Per3: Direccion = new Direccion(3,"Rua Alonso Ojeda",18,"36207","Cee","A Coruña");
    let cor1Per3: Mail = new Mail( EmailType.PERSONAL, "miprimercorreo@gmail.com");
    let tel1Per3: Telefono = new Telefono(PhoneType.MOVIL, 745236895);

    let per3: Persona= new Persona( "Jose Maria","Sanchez-Parra","33274766E",80, new Date("1965-04-24"), "Negro", "H",[dir1Per3],[cor1Per3],[tel1Per3],"Tercera Persona");
    miAgenda.agregarPersona(per3);


  }

  function modificarPersonas() {
    
    let newcor1Per1: Mail = new Mail( EmailType.PERSONAL, "nuevoCorreo@gmail.com");
    miAgenda.editarMail("49667890Z",0,newcor1Per1);

    let newtel1Per2: Telefono = new Telefono(PhoneType.MOVIL, 555777999);
    miAgenda.editarTelefono("59662890Z",0,newtel1Per2);

    let newdir1Per3: Direccion = new Direccion(3,"Plaza America",18,"36207","Cee","A Coruña");
    miAgenda.editarDireccion("49667899E",0,newdir1Per3);

  }
  

  const miAgenda = new Agenda();

  // Guardar los registros de las personas 

  PersonasPrecargadas();
  console.log("Personas en el Sistema: ");
  cargarPersonasSistema();
  modificarPersonas();
  console.log("Personas Modificadas: ");
  cargarPersonasSistema();

  let mostrarMenu :string = readlineSync.question("Seleccione Si (S) ó No (N) para ver nuevamente las opciones disponibles:");

  if(mostrarMenu === 'S'){

      let opcion = cargarMenu();

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
            personaEncontrada!== null? console.log("Persona encontrada:", personaEncontrada):console.log("Persona NO encontrada"); 
            break;

          // Modificar persona
          case 3: 
           let campoAModificar= seleccionCampoEditar();
           campoAModificar!== undefined ?miAgenda.editarPersona(campoAModificar):console.log("Persona NO encontrada");
            break;
           
          //Ver personas registradas
          case 4: 
            var numPersonas= miAgenda.contarPersonas();
            console.log("Total de Personas registradas : ", numPersonas , ".");
            break;  
          default:
            console.log(" --> Error!, Por favor seleccione una opcion válida.");
            break;
        }
        opcion = cargarMenu();
        }
  }