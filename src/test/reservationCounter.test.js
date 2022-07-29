import reservationCounter from '../js/controllers/reservation-counter';

describe('Test length of an array', () => {
  test('Test array should return Length in number', () => {
    const array = ['jerry', 'sbourne', 'nwafrika'];
    expect(reservationCounter(array)).not.toEqual(array);
  });

  test('Get array Length', () => {
    const array = ['jerry', 'sbourne', 'nwafrika'];
    expect(reservationCounter(array)).toBe(3);
  });

  test('Get array Length', () => {
    const array = ['jerry', 'sbourne', 'nwafrika', 123, 'osborne', 'esther'];
    expect(reservationCounter(array)).toBe(6);
  });

  test('Get array Length', () => {
    const array = ['Jane'];
    expect(reservationCounter(array)).toBe(1);
  });

  test('Get empty array Length', () => {
    const array = [];
    expect(reservationCounter(array)).toBe(0);
  });
});