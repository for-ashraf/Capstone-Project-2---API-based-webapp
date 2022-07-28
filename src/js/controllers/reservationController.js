class ReservationPage {
  constructor(shows, btn) {
    [this.show] = shows.moviesArray.filter((show) => show.id === +btn.id);
    this.rerservationArray = [];
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

        <div class="comments-container">
          <h2 id="comments-count"></h2>

          <div id="comments-box">
          
          </div>

        </div>
      </div>`;

    const ReservationPage = document.getElementById('reservationPage');
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
  }

  calculateCount() {
    return this.reservationArray.length;
  }
}

export default ReservationPage;
