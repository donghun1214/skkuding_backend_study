import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantService } from './restaurant.service';
import { RestaurantDto } from './dto/restaurant.dto';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantService],
    }).compile();

    service = module.get<RestaurantService>(RestaurantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('RestaurantService', () => {
    let service: RestaurantService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RestaurantService],
        }).compile();

        service = module.get<RestaurantService>(RestaurantService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a new restaurant', async () => {
        const newRestaurant: RestaurantDto = {
            name: 'Test Restaurant',
            address: '123 Test St',
            phone: 'Test Cuisine',
        };

        await service.createRestaurant(newRestaurant);
        const restaurant = await service.getRestaurantByName('Test Restaurant');
        expect(restaurant).toEqual(newRestaurant);
    });
});
