export class Direccion {
  id: number;
  nombreCalle: string;
  numero: number;
  codigoPostal: string;
  poblacion: string;
  provincia: string;
  piso?: number;
  letra?: string;

  constructor(
    id: number,
    nombreCalle: string,
    numero: number,
    codigoPostal: string,
    poblacion: string,
    provincia: string,
    piso?: number,
    letra?: string
  ) {
    this.id = id
    this.nombreCalle = nombreCalle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
    this.piso = piso;
    this.letra = letra;
  }


  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;

  }

  public getNombreCalle(): string {
    return this.nombreCalle;

  }

  public setNombreCalle(nombreCalle: string): void {
    this.nombreCalle = nombreCalle;

  }

  public getNumero(): number {
    return this.numero;

  }

  public setNumero(numero: number): void {
    this.numero = numero;

  }

  public getCodigoPostal(): string {
    return this.codigoPostal;

  }

  public setCodigoPostal(codigoPostal: string): void {
    this.codigoPostal = codigoPostal;

  }

  public getPoblacion(): string {
    return this.poblacion;

  }

  public setPoblacion(poblacion: string): void {
    this.poblacion = poblacion;

  }

  public getProvincia(): string {
    return this.provincia;

  }

  public setProvincia(provincia: string): void {
    this.provincia = provincia;

  }

  public getPiso(): number | undefined {
    return this.piso;

  }

  public setPiso(piso: number | undefined): void {
    this.piso = piso;

  }

  public getLetra(): string | undefined {
    return this.letra;
  }

  public setLetra(letra: string | undefined): void {
    this.letra = letra;

  }


}