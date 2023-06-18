export enum PhoneType {
  MOVIL,
  FIJO
}


export class Telefono {
    tipo: PhoneType;
    numero: number;
 
    constructor(
      tipo: PhoneType,
      numero: number
      
    ) {
      this.tipo = tipo;
      this.numero = numero;
    }
}

export function validarTipoTelefono(tipo?: string): PhoneType | undefined{

  let tipoTelefono;
  if ( tipo === "MOVIL") {

    tipoTelefono = PhoneType.MOVIL;

  } else if ( tipo === "FIJO") {

    tipoTelefono = PhoneType.FIJO;
  } 

  return tipoTelefono;
}

export function validarNumeroTelefono(numero?: number): number  | undefined {

  let num: string | undefined;

  const telefonoRegex = /^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,}-?\d{1,}$/;

  numero!==undefined?num=numero.toString():num=undefined;
  
  if (num!==undefined){

    if(!telefonoRegex.test(num)) {

      numero=undefined;
    } 
  }

  return numero;

}
