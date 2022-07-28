// Involvement API ID:  ER4ZcRTbIpVq3LDi1zRK
import './css/style.css';

import ShowController from './js/controllers/displaycontroller.js';
import ReservationsController from './js/controllers/reservationsController.js';


import CommentsController from './js/controllers/commentsController.js';

const shows = new DisplayController([]);

const start = 100;

const end = 110;

shows.fetchRange(start, end);
const reservationPopupHandler = () => {
    if (shows.moviesArray.length === end - start) {
      const allReservationButtons = document.querySelectorAll('.reservation-button');
  
      allReservationButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const reservationPopup = new ReservationsController(shows, button);
          reservationPopup.render();
  
          const postReservation = document.querySelector('.reservationPopup-button');
          postReservation.addEventListener('click', () => {
            reservationPopup.sendReservation();
          });
        });
      });
    } else {
      setTimeout(reservationPopupHandler, 15);
    }
  };
  
  reservationPopupHandler();

