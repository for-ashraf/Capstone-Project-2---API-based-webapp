/* eslint-disable max-len */
import APICall from '../core/APICall.js';
// Reservation controller to render reservation related tasks
class ReservationPage {
  URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER4ZcRTbIpVq3LDi1zRK/reservations';

  constructor(shows, btn) {
    [this.show] = shows.moviesArray.filter((show) => show.id === +btn.id);
    this.apiCall = new APICall(this.URL);
    this.reservationArray = [];
  }

  render() {
    const template = `<div class="popup-section">
        <div class="header">
          <img class="show-image" src="${this.show.image.medium}">

          <h1 class="show-name">${this.show.name}</h1>

          <div class="show-data">
            <span class="show-status"><b>Status:</b> ${this.show.status}</span>
            <div id="genres"></div>
            <span class="rating"><b>Rating:</b> ${this.show.rating.average}</span>
            ${this.show.summary}
          </div>
        </div>

        <div class="reservation-container">
          <h2 id="reservation-count"></h2>

          <div id="reservation-box">
          
          </div>

        </div>

        <div class="add-reservation-container">
          <h2>Add a reservation</h2>

          <form class="form add-reservation-form">
          <input type="text" placeholder="Your name" id="user-element" class="input-elements form-control">
          <input type="date" placeholder="Start Date" id="date_start" class="input-elements form-control">
          <input type="date" placeholder="End Date" id="date_end" class="input-elements form-control">
          <button type="button" class="btn btn-primary reservationPopup-button">Reservation</button>  
          </form>        
       </div>

      </div>`;

    const reservationPage = document.getElementById('reservationPage');
    const modalBody = reservationPage.querySelector('.modal-body');
    modalBody.innerHTML = template;

    const genresDiv = document.getElementById('genres');
    const span = document.createElement('span');
    span.innerHTML = '<b>Genre: <b>';

    this.show.genres.forEach((genre, index) => {
      span.innerHTML += `${genre}`;

      if (index !== this.show.genres.length - 1) {
        span.innerHTML += ', ';
      }
    });

    genresDiv.appendChild(span);

    this.getAllReservation();
  }

  getAllReservation() {
    const reservationBox = document.getElementById('reservation-box');
    const reservationCount = document.getElementById('reservation-count');
    reservationBox.innerHTML = '';

    const response = this.apiCall.rgetRequestWithOptions(`?item_id=${this.show.id}`);

    response.then((result) => {
      if (result.length) {
        this.reservationArray = result;

        this.reservationArray.forEach((reservation) => {
          const template = `
           <p>
            <span class="reservation-date">${reservation.date_start} - ${reservation.date_end} by <b> ${reservation.username} </b></span>
           </p>
           `;
          reservationBox.innerHTML += `${template}`;
        });
      }
      reservationCount.innerHTML = `reservation: ${this.calculateCount()}`;
    }).catch((error) => {
      throw new Error(error);
    });
  }
//  A function responsible to send reservation data
  sendReservation() {
    const userInput = document.getElementById('user-element');
    const dateStart = document.getElementById('date_start');
    const dateEnd = document.getElementById('date_end');

    if (userInput.value && dateStart && dateEnd) {
      this.apiCall.rpostRequestWithOptions(this.show.id, userInput.value, dateStart.value, dateEnd.value)
        .then(() => {
          userInput.value = '';

          dateStart.value = '';
          dateEnd.value = '';

          this.getAllReservation();
        });
    }
  }

  calculateCount() {
    return this.reservationArray.length;
  }
}

export default ReservationPage;