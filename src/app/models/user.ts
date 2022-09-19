import { NumberValueAccessor } from "@angular/forms";

export class User {
  username: string;
  password: string;
  email: string;
  type: string;
  id_user: number;
  id_hogar: number;

  constructor(username: string = '', password: string = '', email: string = '',
        type: string = 'user', id_user=-1, id_hogar=-1)
    {
    this.username = username;
    this.password = password;
    this.email = email;
    this.type = type;
    this.id_user = id_user;
    this.id_hogar = id_hogar;
  }
}
