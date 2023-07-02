import Input from "../components/input";
import { useEffect, useState } from "react";
import octokit from "../services/github-service";
import ShowUser from "../components/show-user";
import { createFavorite, removeFavorite } from "../services/favorites-service";
import { SiGithub } from "react-icons/si";

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");

  const [state, setState] = useState({
    status: "inactive",
    data: null,
    error: null,
  });

  const { status, data: user, error } = state;
  console.log(favorites);
  const isFavorite = Boolean(
    favorites?.find((fav) => fav.avatar_url === user?.avatar_url)
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
          status: "error", // inactive | success | error | pending
          data: null,
          error: "El usuario no existe!",
        });
      });
  }
  // useEffect(() => {
  //   getFavorites().then(setFavorites);
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });
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

  // useEffect(() => console.log({ favorites }), [favorites]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          name="query"
          placeholder="Search Profile"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <button type="submit">Search</button> */}
      </div>
      {status === "pending" && "Loading..."}
      {status === "inactive" && (
        <>
          <SiGithub size={120} color={"#171516"} />
          <p>Icon No users...</p>
        </>
      )}
      {status === "success" && (
        <ShowUser
          user={user}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p>{error}</p>}
    </form>
  );
}

export default SearchPage;
