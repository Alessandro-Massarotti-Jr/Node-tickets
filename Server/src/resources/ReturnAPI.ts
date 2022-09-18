export class ReturnAPI {

    public success: boolean
    public message: string
    public data: object

    constructor(success: boolean, message: string, data: object) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

}