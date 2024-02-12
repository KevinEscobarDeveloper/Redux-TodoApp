export class Todo {
   private static contadorIds: number = 0;
 
   public id: number;
   public texto: string;
   public completado: boolean;
 
   constructor(texto: string){
     this.texto = texto;
     this.id = Todo.incrementarContadorIds();
     this.completado = false;
   }
 
   private static incrementarContadorIds(): number {
     return ++Todo.contadorIds;
   }
 }
 