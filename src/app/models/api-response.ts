export class ApiResponse {
    error:boolean
    code:number
    message:string | null
    data:any[] | any

    constructor(error:boolean, code:number, message:string | null,
        data: any | null)
    {
        this.error = error;
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
