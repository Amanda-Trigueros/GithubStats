import Input from "../components/input";
import { useState } from "react";
import octokit from "../services/github-service";
function SearchPage() {
  const [query, setQuery] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
    await octokit
      .request(`GET /${query}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then(console.log);
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
    </form>
  );
}

export default SearchPage;
