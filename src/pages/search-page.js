import Input from "../components/input";
import { useState } from "react";
function SearchPage() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(query);
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
