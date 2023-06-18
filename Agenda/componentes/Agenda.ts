import { Persona }                                                            from "./Persona";
import { Mail }                                                               from "./Mail";
import { Telefono }                                                           from "./Telefono";
import { Direccion }                                                          from "./Direccion";
import { getDatos, guardarDNI, InsModCorreo, InsModTelef, InsertarDireccion } from "../servicios/pedirDatos";

export class Agenda {
  private personas: Persona[];

  constructor() {
    this.personas = [];
  }

  public agregarPersona(nuevaPersona : Persona|undefined = undefined) {
    if(nuevaPersona  === undefined){
      nuevaPersona = getDatos();
    }
    this.personas.push(nuevaPersona);
  }

  public eliminarPersona(persona: Persona) {
    const index = this.personas.indexOf(persona);
    if (index !== -1) {
      this.personas.splice(index, 1);
    }
  }
 
  public buscarPersona( dni :string|undefined = undefined) {

    (dni === undefined)?dni = guardarDNI() :"";
    let personaEncontrada: Persona | undefined = undefined;
    this.personas.forEach((persona) => {
      if (persona.getDni() === dni) {
        personaEncontrada = persona;
      }
    });
    
    return personaEncontrada;
  }

  public contarPersonas() {
    return this.personas.length;
  }

  public mostrarTodas() {
    console.log(JSON.stringify(this.personas));
  }

  public editarPersona( campoAModificar:number , dni :string|undefined = undefined ) {
    let personaAEditar: Persona|undefined= this.buscarPersona(dni);

    if(personaAEditar  === undefined){
      console.log(JSON.stringify(personaAEditar));
      //Sin terminar
    }
    

  }

  public editarMail( dni :string|undefined = undefined , indexMailEdit: number, mail: Mail) {
    let personaAEditar: Persona|undefined= this.buscarPersona(dni);

    if(personaAEditar  !== undefined){
      InsModCorreo(true, indexMailEdit , mail, personaAEditar)

    }
   

  }

  public editarTelefono( dni :string|undefined = undefined , indexMailEdit: number, telefono: Telefono) {
    let personaAEditar: Persona|undefined= this.buscarPersona(dni);

    if(personaAEditar  !== undefined){
      InsModTelef(true, indexMailEdit , telefono, personaAEditar)

    }
   
  }

  public editarDireccion( dni :string|undefined = undefined , indexMailEdit: number, direccion?: Direccion) {
    let personaAEditar: Persona|undefined= this.buscarPersona(dni);

    if(personaAEditar  !== undefined){
      InsertarDireccion(personaAEditar, "S", 0, direccion)

    } 
   
  }

  

}
