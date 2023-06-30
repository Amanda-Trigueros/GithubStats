import Input from "../components/input";
import { useState } from "react";
import octokit from "../services/github-service";

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
  
      { user ? (
      <div>
        <img src= {user.avatar_url} alt="avatar"/>
        <h1>{user.name}</h1>
        <p>{user.bio}</p> 
        <button>{user.followers}</button>
        <button>{user.following}</button>
        <button>{user.public_repos}</button>
        <button>{user.public_gists}</button>
        
      </div>) : "" }

    </form>
  );
}

export default SearchPage;
