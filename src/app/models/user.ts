import { NumberValueAccessor } from "@angular/forms";

export class User {
  username: string;
  password: string;
  email: string;
  type: string;
  id_hogar: number;

  constructor(username: string = '', password: string = '', email: string = '',
        type: string = 'user', id_hogar=-1)
    {
    this.username = username;
    this.password = password;
    this.email = email;
    this.type = type;
    this.id_hogar = id_hogar;
  }
}
