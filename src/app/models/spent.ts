export class Spent {
    title:string;
    date:string;
    created_by:string;
    id_user:number;
    value:number;

    constructor(title:string='Untitled spent',date:string | null, id_user: number = -1, created_by: string | null, value:number=0){
        this.title = title;
        this.date = date;
        this.id_user = id_user;
        this.created_by = created_by;
        this.value = value;
    }
}
