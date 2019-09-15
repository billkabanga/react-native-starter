const fetchMovies = async () => {
  const data = await fetch(
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes',
  );
  const dataJSON = await data.json();
  return dataJSON;
};

export default fetchMovies;
