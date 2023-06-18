import { Telefono, validarTipoTelefono, validarNumeroTelefono } from "../componentes/Telefono";
import { Mail, validarTipoEmail }                               from "../componentes/Mail";
import { Direccion }                                            from "../componentes/Direccion";
import { Persona }                                              from "../componentes/Persona";
import * as readlineSync from 'readline-sync';

export function guardarDNI(persona?: Persona): string {

  let dni;

  while (dni == undefined) {
    persona != undefined ? console.log("DNI actual guardado: " + persona.getDni()) : ""
    dni = readlineSync.question("Introduzca el número de DNI: ");
    dni == undefined ? (persona != undefined ? dni = persona.getDni() : "") : ""
  }

  return dni;
}

export function InsertarDireccion(persona?: Persona, accion?: string, indexMailEdit?: number, direccion?: Direccion): Direccion[] {

  let direcciones: Direccion[];
  let numDirecciones = 1;

  if (accion === undefined) {
    persona != undefined ? accion = readlineSync.question("Operaciones : S = Sobreescribir, A = Insertar en lista, E = Nueva lista ") : direcciones = [];
  }
  persona != undefined && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];

  if (indexMailEdit === undefined) {
    numDirecciones = parseInt(readlineSync.question("Cantidad de direcciones a insertar o editar:"))
  }


  if (accion !== 'S') {

    while (direcciones.length === 0 || numDirecciones != 0) {

      let numero: number = InsertarModNum("Numero");
      let calle: string = InsertarModTextos("Calle");
      let codigoPostal: string = InsertarModTextos("CP"); //LETRAS Y NUMEROS
      let poblacion: string = InsertarModTextos("Poblacion");
      let provincia: string = InsertarModTextos("Provincia");
      let piso: number | undefined = parseInt(readlineSync.question("Introduzca el piso:"));

      if (piso != undefined && validarTextoDefinido(piso)) {
        piso = InsertarModNum("Piso", piso, false)
      }
      let letra: string | undefined = readlineSync.question("Introduzca la letra:");
      console.log(validarTextoDefinido(letra))
      if (letra != undefined && !validarTextoDefinido(letra)) {
        letra = InsertarModTextos("Letra", letra, false)
      }

      letra != undefined ? InsertarModTextos("Letra", letra) : "";

      let direccion = new Direccion(
        direcciones.length > 0 ? direcciones.length - 1 : 1,
        calle,
        numero,
        codigoPostal,
        poblacion,
        provincia,
        piso,
        letra
      );
      numDirecciones -= 1
      direcciones.push(direccion);
    }

  } else {

    if (direccion === undefined) {
      while (numDirecciones != 0) {
        let direccionEditar = parseInt(readlineSync.question("Indica el id de la direccion a editar:"));
        console.log("Se va a modificar la direccion con id:" + direcciones[direccionEditar].getId())

        direcciones[direccionEditar].setNombreCalle(InsertarModTextos("Calle", direcciones[direccionEditar].getNombreCalle()));
        direcciones[direccionEditar].setNumero(InsertarModNum("Numero", direcciones[direccionEditar].getNumero()));

        let codigoPostal: string | undefined;
        while (codigoPostal == undefined) {
          console.log(" CP actual:" + direcciones[direccionEditar].getCodigoPostal())
          codigoPostal = readlineSync.question("Introduce el nuevo CP:")
          codigoPostal == undefined ? (direcciones[direccionEditar].getCodigoPostal() != undefined ? codigoPostal = direcciones[direccionEditar].getCodigoPostal() : codigoPostal = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
        }

        direcciones[direccionEditar].setPoblacion(InsertarModTextos("Poblacion", direcciones[direccionEditar].getPoblacion()));
        direcciones[direccionEditar].setProvincia(InsertarModTextos("Provincia", direcciones[direccionEditar].getProvincia()));
        direcciones[direccionEditar].setPiso(InsertarModNum("Piso", direcciones[direccionEditar].getPiso()));
        direcciones[direccionEditar].setLetra(InsertarModTextos("Letra", direcciones[direccionEditar].getLetra()));


        let letra: string | undefined;
        //while(letra==undefined){
        console.log("Letra actual:" + direcciones[direccionEditar].getLetra())
        letra = readlineSync.question("Introduce la nueva letra:")
        letra == undefined ? (direcciones[direccionEditar].getLetra() != undefined ? letra = direcciones[direccionEditar].getLetra() : letra = undefined) : direcciones[direccionEditar].setLetra(letra);
        //}

        numDirecciones -= 1
      }

    } else {

      if (persona !== undefined) {

        if (indexMailEdit === undefined) {

          indexMailEdit = parseInt(readlineSync.question("Introduzca el index o posición del mail a editar:"));

        }

        let i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;

        direcciones[i] = direccion;

        persona.setDirecciones(direcciones);

      }
    }

  }

  return direcciones;

}

export function InsModCorreo(isEdit: Boolean = false, indexMailEdit?: number, mail?: Mail, persona?: Persona): Mail[] {

  let mails: Mail[];
  let tipoMail;

  persona != undefined ? mails = persona.getMails() : mails = [];

  if (mail === undefined) {
    while (tipoMail === undefined) {
      tipoMail = readlineSync.question("Introduzca el tipo de correo electronico (PERSONAL ó EMPRESA):");
      tipoMail = validarTipoEmail(tipoMail);
    }

    mail = new Mail(
      tipoMail,
      readlineSync.question("Introduzca el correo electronico:")
    );

  }

  if (isEdit && persona !== undefined) {
    if (indexMailEdit === undefined) {

      indexMailEdit = parseInt(readlineSync.question("Introduzca el index o posición del mail a editar:"));

    }

    let i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;

    mails[i].direccion = mail.direccion;
    mails[i].tipo = mail.tipo;

    persona.setMails(mails);

  } else {

    mails.push(mail);

  }

  return mails;

}

export function InsModTelef(isEdit: Boolean = false, indexTelefonoEdit?: number, telefono?: Telefono, persona?: Persona): Telefono[] {

  let telefonos: Telefono[] = [];
  let tipoTelefono, numeroTelefono;

  persona != undefined ? telefonos = persona.getTelefonos() : telefonos = [];

  if (telefono === undefined) {
    while (tipoTelefono === undefined) {
      tipoTelefono = readlineSync.question("Introduzca el tipo de telefono (MOVIL|FIJO):");
      tipoTelefono = validarTipoTelefono(tipoTelefono);
    }

    while (numeroTelefono === undefined) {

      numeroTelefono = parseInt(readlineSync.question("Introduzca el numero de telefono:"));
      
    }

    telefono = new Telefono(tipoTelefono, numeroTelefono);
  }


  if (isEdit && persona !== undefined) {
    if (indexTelefonoEdit === undefined) {

      indexTelefonoEdit = parseInt(readlineSync.question("Introduzca el index o posición del telefono a editar:"));

    }
    let i = indexTelefonoEdit === 0 ? 0 : indexTelefonoEdit - 1;

    telefonos[i].numero = telefono.numero;
    telefonos[i].tipo = telefono.tipo;

    persona.setTelefonos(telefonos);

  } else {

    telefonos.push(telefono);

  }


  return telefonos;

}

function validarTextoDefinido(texto: any): Boolean {
  const regex = /^[a-zA-Z\s]+$/;
  let isValid = true;
  if (!regex.test(texto)) {
    isValid = false;

  }

  return isValid;
}

function InsertarModTextos(atributo: string, value: string | undefined = undefined, isRequired: Boolean = true): string {

  while (value === undefined) {
    value != undefined ? console.log(atributo + " actual:" + value) : "";
    value = readlineSync.question("Introduzca el " + atributo.toLocaleLowerCase() + " :");
    if (!validarTextoDefinido(value)) {
      value = undefined;
      if (isRequired) {
        console.log("Es un campo obligatorio y no puede ser númerico");
      } else {
        console.log("No puede ser númerico");

      }
    }
  }

  return value;
}

function InsertarModNum(atributo: string, value: number | undefined = undefined, isRequired: Boolean = true): number {

  while (value === undefined) {
    value != undefined ? console.log(atributo + " actual:" + value) : "";
    value = parseInt(readlineSync.question("Introduzca el " + atributo.toLocaleLowerCase() + " :"));
    if (validarTextoDefinido(value)) {
      value = undefined;
      if (isRequired) {
        console.log("Es un campo obligatorio y no puede ser texto");
      } else {
        console.log("No puede ser texto");

      }
    }
  }

  return value;
}

export function getDatos(persona?: Persona): Persona {

  //Nombre
  let nombre: string = InsertarModTextos("Nombre", persona?.getNombre());
  let apellidos: string = InsertarModTextos("Apellidos", persona?.getApellidos());
  let edad: number = InsertarModNum("Edad", persona?.getEdad());
  //DNI
  let dni: string | undefined = guardarDNI();

  //cumple
  let cumple: Date | undefined;
  while (cumple == undefined) {
    persona != undefined ? console.log("Fecha de cumpleanios guardada::" + persona.getcumple()) : ""
    cumple = new Date(readlineSync.question("Introduzca la fecha de nacimiento con el siguiente formato 'yyyy-mm-dd':"))
    cumple == undefined ? (persona != undefined ? cumple = persona.getcumple() : "") : ""
  }

  //COLOR 
  let colorFavorito: string = InsertarModTextos("Color", persona?.getColorFavorito())

  //SEXO
  let sexo: string | undefined;
  while (sexo === undefined) {
    persona != undefined ? console.log("Sexo actual:" + persona.getSexo()) : ""
    sexo = readlineSync.question("Introduzca el sexo (H:Hombre | M:Mujer):")
    sexo == undefined ? (persona != undefined ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
  }

  //DIRECCION
  let direcciones: Direccion[] = InsertarDireccion(persona);

  //MAIL 
  let mails: Mail[] = InsModCorreo();

  //TELEFONO  
  let telefonos: Telefono[] = InsModTelef();

  //NOTAS
  let notas: string = readlineSync.question("Introduce las notas:");

  return new Persona(
    nombre,
    apellidos,
    dni,
    edad,
    cumple,
    colorFavorito,
    sexo,
    direcciones,
    mails,
    telefonos,
    notas
  );
}