const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getListOfTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
   })
  return result
}

Cinema.prototype.filmByTitle = function (title) {
 const result = this.films.find((film) => {
  return title === film.title
 })
 return result
}

Cinema.prototype.filmByGenre = function (genre) {
  const result = this.films.filter((film)=>{
    return genre === film.genre
  })
  return result
}

Cinema.prototype.filmByYear = function (year){
  const result = this.films.filter((film)=>{
    return year === film.year
  })
  return result
}

Cinema.prototype.filmsInAYear = function (year){
  const result = this.films.some((film) => {
    return year === film.year
  })
  return result
}

Cinema.prototype.isLongerThan = function (length){
  const result = this.films.every((film)=>{
    return length > film.length
  })
  return result
}

module.exports = Cinema;
