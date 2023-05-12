const Cinema = function (films) {
  this.films = films;
};


// const filmTitleArray = (cinema_film_list) => {
//   const result = []

//   cinema_film_list.forEach((film) => {
//     result.push(film.title)
//   })
//   return result
// }

Cinema.prototype.filmTitleArrayMap = (cinema_film_list) => {

  const filmArray = cinema_film_list.map((film) => {
    return film.title
  })
  return filmArray
}

// Cinema.prototype.findFilmByTitle = (film_list,film_title) => {

//   const film_obj = film_list.forEach((film)=>{
//     if (film.title === film_title) {
//       return film
//     }
//   })
//   return film_obj
// }

Cinema.prototype.findFilmByTitleFilter = (film_list,film_title) => {
  const filmReturn = film_list.filter(film => 
    film.title === film_title)
  return filmReturn
}

Cinema.prototype.filterFilmsByGenre = (film_list,film_genre) => {
  const filmReturn = film_list.filter(film => 
    film.genre === film_genre)
  return filmReturn
}

Cinema.prototype.getTotalRuntime= (film_list) => {
  const allLen = []
  for (film of film_list){
    allLen.push(film.length)
  }
  const totalRuntime = allLen.reduce((previousValue,currentValue) => {
    return previousValue + currentValue
  })
  return totalRuntime
}

Cinema.prototype.isFilmInYear = (film_list,year) => {
  const filmIs = film_list.filter(film => film.year === year)
  if (filmIs.length > 0) {
    return true
  } else {
    return false
  }
}

Cinema.prototype.filmLenLeast = (film_list,len) => {

  const filmArray = film_list.map((film) => {
    return film.length >= len
  })
  
  if (filmArray.includes(true)) {
    return true
  } else {
    return false
  }

}

module.exports = Cinema;



// const multiplyByTwo = (numbers) => {
//   const result = []

//   numbers.forEach((number) => { 
//       const multiNum = number * 2 
//       result.push(multiNum)})
// }