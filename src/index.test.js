import {expect} from 'chai';
import presidents from './index';

describe('presidents-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(presidents.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `barack obama`', function() {
      expect(presidents.all).to.include('Barack obama');
    });
  });

  describe('random', function() {
    it('should return a random item from the presidents.all', function() {
      var randomItem = presidents.random();
      expect(presidents.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = presidents.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(presidents.all).to.include(item);
      });
    });
  });
});