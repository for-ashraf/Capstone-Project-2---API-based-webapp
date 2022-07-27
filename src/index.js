import './css/style.css';

import ShowController from './js/controllers/displaycontroller.js';


const shows = new ShowController([]);

const start = 100;

const end = 110;

shows.fetchRange(start, end);
