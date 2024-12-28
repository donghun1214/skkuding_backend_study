import { IsString } from "class-validator";

export class RestaurantDto{
    @IsString()
    readonly name: string;

    @IsString()
    readonly address: string;
    
    @IsString()
    readonly phone: string;
}