import { Direccion }  from "./Direccion";
import { Telefono }   from "./Telefono";
import { Mail }       from "./Mail";

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumple: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(nombre: string, apellidos: string, dni: string, edad: number, cumple: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
    this.nombre = nombre;
    this.dni = dni;
    this.apellidos = apellidos;
    this.edad = edad;
    this.cumple = cumple;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public getDni(): string {
    return this.dni;
  }

  public setDni(dni: string): void {
    this.dni = dni;
  }

  public getcumple(): Date {
    return this.cumple;
  }

  public setcumple(cumpleanos: Date): void {
    this.cumple = cumpleanos;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public setColorFavorito(colorFavorito: string): void {
    this.colorFavorito = colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public setDirecciones(direcciones: Direccion[]): void {
    this.direcciones = direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public setMails(mails: Mail[]): void {
    this.mails = mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public setTelefonos(telefonos: Telefono[]): void {
    this.telefonos = telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public setNotas(notas: string): void {
    this.notas = notas;
  }
}