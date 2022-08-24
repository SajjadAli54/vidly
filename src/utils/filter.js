export function filterMovies(items, genre) {
  if (genre === "All") return items;
  return items.filter((item) => item.genre.name === genre);
}
