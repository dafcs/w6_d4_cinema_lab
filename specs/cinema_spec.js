const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');
const { exitCode } = require('process');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const expected = ['Moonlight','Blade Runner 2049','Dunkirk','Black Panther','T2 Trainspotting']
    const actual = cinema.filmTitleArrayMap(cinema.films)
    assert.deepStrictEqual(actual,expected)
  });

  it('should be able to find a film by title', function() {
    const actual = cinema.findFilmByTitleFilter(cinema.films,'Moonlight')
    const expected = [moonlight]
    assert.deepStrictEqual(actual,expected)
  });

  // new test
  it('should be able to find a film by title', function() {
    const actual = cinema.findFilmByTitleFind(cinema.films,'Moonlight')
    const expected = moonlight
    assert.deepStrictEqual(actual,expected)
  });

  it('should be able to filter films by genre', function() {
    const actual = cinema.filterFilmsByGenre(cinema.films,'drama')
    const expected = [moonlight,trainspotting]
    assert.deepStrictEqual(actual,expected)
  });

  it('should be able to calculate total running time of all films',function() {
    const actual = cinema.getTotalRuntime(cinema.films)
    const expected = 622
    assert.strictEqual(actual,expected)
  });
  //new test
  it('should be able to calculate total running time of all films',function() {
    const actual = cinema.getTotalRunTimeNEW()
    const expected = 622
    assert.strictEqual(actual,expected)
  });

  it('should be able to confirm *at least one* film is from a specified year - true case - 1/2',function() {
    const actual = cinema.isFilmInYear(cinema.films,2016)
    const expected = true
    assert.strictEqual(actual,expected)
  });

  //new test
  it('should be able to confirm *at least one* film is from a specified year - true case - 1/2',function() {
    const actual = cinema.isFilmInYearSome(cinema.films,2016)
    const expected = true
    assert.strictEqual(actual,expected)
  });

  it('should be able to confirm *none of* the films are from a specified year - false case - 2/2',function() {
    const actual = cinema.isFilmInYear(cinema.films,2015)
    const expected = false
    assert.strictEqual(actual,expected)
  });

  it('should be able to confirm whether *all* films are *at least* a specified length (true / false) 1/2',function() {
    const actual = cinema.filmLenAtLeast(cinema.films,90)
    const expected = true
    assert.strictEqual(actual,expected)
  });

  it('should be able to confirm whether *all* films are *at least* a specified length (true / false) 2/2',function() {
    const actual = cinema.filmLenAtLeast(cinema.films,100)
    const expected = false
    assert.strictEqual(actual,expected)
  });

});
