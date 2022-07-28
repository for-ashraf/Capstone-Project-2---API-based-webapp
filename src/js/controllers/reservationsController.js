class ReservationsPage {
  constructor(shows, btn) {
    [this.show] = shows.moviesArray.filter((show) => show.id === +btn.id);
    this.reservationsArray = [];
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
          <div class="reservations-container">
            <h2 id="reservations-count"></h2>
            <div id="reservations-box">
            
            </div>
          </div>
        </div>`;

    const reservationsPage = document.getElementById('reservationsPage');
    const modalBody = reservationsPage.querySelector('.modal-body');
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
  }

  calculateCount() {
    return this.reservationsArray.length;
  }
}

export default ReservationsPage;