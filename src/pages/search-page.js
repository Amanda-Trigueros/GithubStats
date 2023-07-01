import Input from "../components/input";
import { useEffect, useState } from "react";
import octokit from "../services/github-service";
import ShowUser from "../components/show-user";
import { createFavorite, removeFavorite } from "../services/favorites-service";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [state, setState] = useState({
    status: "inactive",
    data: null,
    error: null,
  });

  const { status, data: user, error } = state;

  const isFavorite = Boolean(
    favorites.find((fav) => fav.avatar_url === user?.avatar_url)
  );
  function octokitRequest() {
    octokit
      .request("GET /users/{username}", {
        username: `${query}`,
      })
      .then((response) => {
        setState({ status: "success", data: response.data, error: null });
        localStorage.setItem("Profile", JSON.stringify(response.data));
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe!",
        });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    octokitRequest();
  }
  /**
   * Favorites
   */
  // {
  // 	"name": "Diego Torres",
  // 	"username": "diegotc86",
  // 	"avatar_url": "some_avatar.jpg"
  // }
  function handleAddFavorite() {
    const data = {
      name: user.name,
      username: user.login,
      avatar_url: user.avatar_url,
    };
    console.log(user);
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
    console.log(data);
  }

  function handleRemoveFavorite() {
    // removeFavorite(user.)
  }

  useEffect(() => console.log({ favorites }), [favorites]);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="Search Profile"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
      {status === "inactive" && <p>Icon No users...</p>}
      {status === "success" && (
        <ShowUser
          user={user}
          onAddFavorite={handleAddFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p>{error}</p>}
    </form>
  );
}

export default SearchPage;
