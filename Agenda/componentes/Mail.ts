export enum EmailType {
  PERSONAL,
  EMPRESA
}

export class Mail {
    tipo:  EmailType;
    direccion: string;
 
    constructor(
      tipo:  EmailType,
      direccion: string
    ) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  }

  export function validarTipoEmail(tipo?: string): EmailType | undefined{

    let tipoEmail;
    if ( tipo === "MOVIL") {
      tipoEmail = EmailType.EMPRESA;
    } 
    else if ( tipo === "FIJO") {
      tipoEmail= EmailType.PERSONAL;
    } 
  
    return tipoEmail;
  }