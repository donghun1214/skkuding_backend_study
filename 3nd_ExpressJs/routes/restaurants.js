import fs from 'fs';
import express from 'express';

const dataPath = "./data/restaurants.json"
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const len = data.restaurants.length;
const router = express.Router();

router.get('/', (req, res) => {
  res.json(data);
});

router.get(`/:name`, (req,res,next)=> {
  const {name} = req.params;
  var isExist = false;
  for(let i = 0; i < len; i++){
    if(name === data.restaurants[i].name){
      res.json(data.restaurants[i]);
      isExist = true;
      break;
    }
  }
  if(!isExist){
    const error = new Error(`${name}이 존재하지 않는다.`);
    error.status = 400; 
    next(error);
  }
})



router.post('/create', (req,res)=>{
  var content = req.body;
  for(let i = 0; i < len; i++){
    if(content.name === data.restaurants[i].name){
      const error = new Error("already exist");
      error.status = 401;
      next(error)
    }
  }
  data.restaurants.push(content);
  fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
    if(err){
      console.log("cannot add to file");
    }else{
      res.json(content);
    }
  });
})

router.delete('/:name', (req,res,next) =>{
  const {name} = req.params;
  var isDelete = false;
  for(let i = 0; i < len; i++){
    if(name === data.restaurants[i].name){
      res.json(data.restaurants[i]);
      data.restaurants.splice(i,1);
      fs.writeFile(dataPath, JSON.stringify(data, null, 2), (err) => {
        if(err){
          console.log("cannot add to file");
        }else{
          isDelete = true;
        }
      });
      break;
    }
  }
  if(!isDelete){
    const error = new Error("해당 맛집 정보가 존재하지 않음");
    error.status = 404;
    next(error);
  }
})


router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ 
      name: error.name || 'Internal Server Error',
      message: error.message || '서버 내부에서 오류가 발생했습니다.'
    });
});

export default router;