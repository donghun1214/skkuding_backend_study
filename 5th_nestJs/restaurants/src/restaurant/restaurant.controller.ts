
import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';


@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}
    @Get(`/`)
    async getRestaurants(){
        return await this.restaurantService.getRestaurants();
    }

    @Get(`/:name`)
    async getRestaurant(@Param('name') name:string){
        return await this.restaurantService.getRestaurantByName(name);
    }

    @Post(`/create`)
    async createRestaurant(@Body() restaurantDto: RestaurantDto) {
        return await this.restaurantService.createRestaurant(restaurantDto);
    }

    @Delete(`/:name`)
    async deleteRestaurantByName(@Param(`name`) name:string){
        return await this.restaurantService.deleteRestaurantByName(name);
    }
}
