function FavoritesPage({ favorites }) {
  return (
    <>
      <h1>Favorites</h1>
      {favorites.map((fav) => (
        <p>{fav.name}</p>
      ))}
    </>
  );
}

export default FavoritesPage;
