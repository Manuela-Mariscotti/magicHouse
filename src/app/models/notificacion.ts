export class Notificacion {
  title: string;
  description: string;
  type: string;

  constructor(title: string, description: string, type: string){
    this.title = title;
    this.description = description;
    this.type = type;
  }
}
