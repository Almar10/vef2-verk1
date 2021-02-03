import express from 'express';
import {router} from './videos.js';
import {videoAgeMap} from './Videodate.js';

const app = express();
const subapp = express();
const port = 3000
const host ='127.0.0.1'

app.use('/', router);

app.set('views', './views')
app.set('view engine', 'ejs')
app.locals.videoAgeMap = videoAgeMap;

app.use(express.static('public'));

function notFoundHandler(req, res, next) {
  res.status(404).send('404 Not Found');
}


app.listen(port, () => console.log(`Server @ http://${host}: ${port}/`))