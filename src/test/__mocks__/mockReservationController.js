class ReservationPage {
  URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER4ZcRTbIpVq3LDi1zRK/reservations'

  constructor(shows, btn) {
    [this.show] = shows.moviesArray.filter((show) => show.id === +btn.id);
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

            <textarea placeholder="Your reservation" id="reservation-message" class="form-control" rows="5"></textarea>

            <button type="button" class="btn btn-primary reservationPopup-button">reservation</button>  
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

    this.renderReservation();
  }

  calculateCount() {
    return this.reservationArray.length;
  }

  searchDOM() {
    const allReservation = document.querySelectorAll('.reservation-username');
    const { URL } = this;
    this.URL = URL;
    return allReservation;
  }

  renderReservation() {
    const reservationBox = document.getElementById('reservation-box');
    const reservationCount = document.getElementById('reservation-count');
    reservationBox.innerHTML = '';

    this.reservationArray.forEach((reservation) => {
      const template = `
       <p>
        <span class="reservation-date" >${reservation.creation_date} </span>
        <span class="reservation-username"><b>${reservation.username}: </b></span>
        <span>${reservation.reservation} </span>
       </p>`;
      reservationBox.innerHTML += `${template}`;
    });
    reservationCount.innerHTML = `reservation: ${this.calculateCount()}`;
  }
}

export default ReservationPage;
