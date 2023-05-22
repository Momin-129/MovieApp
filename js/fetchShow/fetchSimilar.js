export async function fetchSimilar(id) {
  const similar = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f0da4eeabfc41aacee7225b73da8b902&page=1`
  );
  return similar.json();
}

export async function fetchSimilarId(id) {
  const similar = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=f0da4eeabfc41aacee7225b73da8b902`
  );

  return similar.json();
}
