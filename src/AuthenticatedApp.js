import SearchPage from "./pages/search-page";
import { Routes, Route } from "react-router-dom";
import FollowersPage from "./pages/followers-page";
import FollowingPage from "./pages/following-page";
import PublicReposPage from "./pages/public_repos-page";

function AuthenticatedApp() {
  console.log("login");
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="followers" element={<FollowersPage />} />
      <Route path="followings" element={<FollowingPage />} />
      <Route path="public_repos" element={<PublicReposPage />} />
      <Route path="*" element={<SearchPage />} />
    </Routes>
  );
}

export default AuthenticatedApp;
