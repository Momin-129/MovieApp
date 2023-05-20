export async function fetchMovies(movieName) {
  const listOfMovies = await fetch(
    `https://www.omdbapi.com/?s=${movieName}&apikey=486d2480&page=1`
  );

  const record = listOfMovies.json();
  return record;
}
