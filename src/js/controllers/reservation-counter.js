const reservationCounter = (reservation) => {
  if (reservation.length) {
    return reservation.length;
  }
  return 0;
};

export default reservationCounter;