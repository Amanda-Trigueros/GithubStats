import Input from "../components/input";
import { useState } from "react";
import octokit from "../services/github-service";
import ShowUser from "../components/show-user";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  function octokitRequest() {
     return (
    octokit
      .request("GET /users/{username}", {
        username: `${query}`,
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      )
  }

  function handleSubmit(event) {
    event.preventDefault();
    octokitRequest()
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="Search Profile"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button>Search</button>
  
      { user ? <ShowUser user={user} /> : "" }

    </form>
  );
}

export default SearchPage;
