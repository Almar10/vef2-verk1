import express from 'express';
export const router = express.Router();
import { readFile } from 'fs/promises';



//Þessi föll, getContent, index og videos færa uppl úr json yfir í ejs filana, þannig hægt sé að vinna með þá þar
async function getContent(){
  let data = '';
  try {
    data = await readFile('./videos.json');
    return await JSON.parse(data);
  } catch (e) {
    console.error('error', e);
    return res.status(500).send('Villa');
  }
}



async function index(req, res){
  const data = await getContent();
  const {videos,categories} = data;
  res.render('index', {videos, categories});
}

async function videos(req, res){
  
  const data = await getContent();
  const {id} = req.params;
  
  const video = data.videos.find((video) => video.id === parseInt(id));
  
  res.render('videos', {video})
  
};



router.get('/', (req, res) => {
  index(req,res);
});

router.get('/:id', (req,res) => {
  videos(req,res);
})


