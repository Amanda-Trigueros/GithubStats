import SearchPage from "./pages/search-page";
import { Routes, Route, Outlet } from "react-router-dom";
import FollowersPage from "./pages/followers-page";
import FollowingPage from "./pages/following-page";
import PublicReposPage from "./pages/public_repos-page";
import ProfilePage from "./pages/profile-page";
import FavoritesPage from "./pages/favorites-page";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import {
  removeFavorite,
  createFavorite,
  getFavorites,
} from "./services/favorites-service";

function AuthenticatedApp() {
  const [favorites, setFavorites] = useState([]);
  function handleAddFavorite(user) {
    const data = {
      name: user?.name,
      username: user?.login,
      avatar_url: user?.avatar_url,
    };
    // console.log(user);
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
    // console.log(data);
  }
  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);
  function handleRemoveFavorite(user) {
    const favorite = favorites.find(
      (fav) => fav.avatar_url === user?.avatar_url
    );
    console.log(favorite);
    console.log(user);
    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.username !== user?.login
      );
      setFavorites(newFavorites);
      console.log(newFavorites);
    });
  }

  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Outlet />
              <Navbar />
            </>
          }
        >
          <Route path="/" element={<SearchPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="followers" element={<FollowersPage replace />} />
          <Route path="followings" element={<FollowingPage />} />
          <Route
            path="favorites"
            element={<FavoritesPage favorites={favorites} />}
          />
          <Route path="public_repos" element={<PublicReposPage />} />
          <Route
            path="*"
            element={
              <SearchPage
                favorites={favorites}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
