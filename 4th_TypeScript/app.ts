import express from 'express';  //express 자체는 CommonJs 모듈로 제공되어서 기본내보내기 형식으로만 받을 수 있음 import {express} 불가.
import restaurantRoute from './routes/restaurants';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/restaurants', restaurantRoute);  //중간 경로 명시

app.listen(PORT, () => {
  console.log("server running!")
});

