import { Registrar } from "../registro/registrar";

class Seguimiento {
  private registrar: Registrar;

  constructor() {
    this.registrar = new Registrar();
  }

  public realizarSeguimiento(tarea: string): void {
    // Lógica para realizar el seguimiento de una tarea
    console.log(`Realizando seguimiento de la tarea: ${tarea}`);
    this.registrar.registrarTarea(`Seguimiento de ${tarea}`);
  }
}

export { Seguimiento };
