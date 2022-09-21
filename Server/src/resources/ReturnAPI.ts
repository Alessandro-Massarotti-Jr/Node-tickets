import { Response } from "express"

interface MessageReturnInterface {
     error: boolean;
     message: string;
     developerMessage:string;
     data: object;
     statusHTTP:number;
}

export class ReturnAPI {

    public static messageReturn(res:Response, data:MessageReturnInterface){

        return res.status(data.statusHTTP).json(data);
    }

}