import { Registrar } from "./registrar";

class GestionarInfo {
  private registrar: Registrar;

  constructor() {
    this.registrar = new Registrar();
  }

  public obtenerInformacion(): void {
    // Lógica para obtener información
    console.log("Obteniendo información");
    this.registrar.registrarTarea("Tarea desde GestionarInfo");
  }
}

export { GestionarInfo };
