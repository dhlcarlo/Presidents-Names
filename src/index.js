import uniqueRandomArray from 'unique-random-array';
import presidentsNames from './presidents-names.json';

var getRandomItem = uniqueRandomArray(presidentsNames);

module.exports = {
  all: presidentsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}