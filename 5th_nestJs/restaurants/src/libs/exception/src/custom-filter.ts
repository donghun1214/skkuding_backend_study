import { ConflictException, HttpException } from "@nestjs/common";

export abstract class customException extends Error{
    name: string;

    constructor(message:string){
        super(message);
        this.name = this.constructor.name;
    }
    abstract convert2HTTPException(message?:string): HttpException
}

export class DuplicateException extends customException{
    constructor(name:string){
        super(`${name} is already exist`);
    }

    convert2HTTPException(message?:string){
        return new ConflictException(message || this.message);
    }
}