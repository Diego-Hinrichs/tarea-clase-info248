import { Seguimiento } from "../seguimiento/seguimiento";

class Tareas {
  private seguimiento: Seguimiento;

  constructor() {
    this.seguimiento = new Seguimiento();
  }

  public crearTarea(tarea: string): void {
    // Lógica para crear una nueva tarea
    console.log(`Nueva tarea creada: ${tarea}`);
    this.seguimiento.realizarSeguimiento(tarea);
  }
}

export { Tareas };
