import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { RestaurantDto } from './dto/restaurant.dto';

const dataPath = path.join(__dirname, '../../data/restaurants.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

@Injectable()
export class RestaurantService {
    async getRestaurants(){
        return data;
    }
    
    async getRestaurantByName(name: string){
        return data.restaurants.find(restaurant => restaurant.name === name); //배열의 각 요소를 restaurant 로 명명함
    }

    async createRestaurant(restaurantDto:RestaurantDto){
        data.restaurants.push(restaurantDto);
        fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
            if(err){
              console.log("cannot add to file");
            }
        });
    }

    async deleteRestaurantByName(name: string){
        const restaurantIndex = data.restaurants.findIndex(restaurant => restaurant.name === name);
        if(restaurantIndex === -1){
            return;
        }
        data.restaurants.splice(restaurantIndex, 1); //배열에서 삭제
        fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
            if(err){
              console.log("cannot delete from file");
            }
        });
    }
}
