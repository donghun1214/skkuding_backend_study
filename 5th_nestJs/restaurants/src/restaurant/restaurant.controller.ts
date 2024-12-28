
import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantDto } from './dto/restaurant.dto';


@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {} //constructor 를 통해 필요한 제공자를 주입한다. DI 방식 즉, 제공자의 인스턴스를 생성하여 주입하는 방식은
                                                                          // 클래스 간의 의존성을 자동으로 해결하여 코드의 결합도를 낮춥니다.
    @Get(`/`)
    async getRestaurants(){
        return await this.restaurantService.getRestaurants();
    }

    @Get(`/:name`)
    async getRestaurant(@Param('name') name){
        return await this.restaurantService.getRestaurantByName(name);
    }

    @Post(`/create`)
    async createRestaurant(@Body() restaurantDto: RestaurantDto) {
        await this.restaurantService.createRestaurant(restaurantDto);
    }

    @Delete(`/:name`)
    async deleteRestaurantByName(@Param(`name`) name:string){
        return await this.restaurantService.deleteRestaurantByName(name);
    }
}
