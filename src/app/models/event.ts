import * as moment from "moment";

export class Event {

    date:string;
    title:string;
    description:string

    constructor(date:string, title:string, description:string){
        this.date = date;
        this.title = title;
        this.description = description;
    }
}
