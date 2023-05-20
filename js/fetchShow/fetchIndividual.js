export async function fetchIndividual(movieId) {
  const listOfMovies = await fetch(
    `https://www.omdbapi.com/?i=${movieId}&apikey=486d2480&page=1`
  );

  const record = listOfMovies.json();
  return record;
}
