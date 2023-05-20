export async function fetchIndividual(movieId) {
  const listOfMovies = await fetch(
    `http://www.omdbapi.com/?i=${movieId}&apikey=486d2480&page=1`
  );

  const record = listOfMovies.json();
  return record;
}
