import { Injectable } from '@nestjs/common';
import fs from 'fs';


const dataPath = "./data/restaurants.json"
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

@Injectable()
export class RestaurantService {}
