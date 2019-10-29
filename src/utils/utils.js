// return page title depending on url location passed in as title
export const getPageTitle = (title, search) => {
  const titles = {
    top_rated: 'Top Rated',
    upcoming: 'Upcoming Movies',
    popular: 'Popular Movies',
    now_playing: 'Now Playing',
    search: search
      ? `Search results for ${search}`
      : 'Search database for movies'
  };
  return titles[title];
};
