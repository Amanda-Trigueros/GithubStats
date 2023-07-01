import SearchPage from "./pages/search-page";
import { Routes, Route, Outlet } from "react-router-dom";
import FollowersPage from "./pages/followers-page";
import FollowingPage from "./pages/following-page";
import PublicReposPage from "./pages/public_repos-page";
import Navbar from "./components/navbar";

function AuthenticatedApp() {
  console.log("login");
  return (
    <>
    <Routes>
      <Route element={<><Navbar/><Outlet/>  </>}>
      <Route path="/" element={<SearchPage />} />
      <Route path="followers" element={<FollowersPage replace />} />
      <Route path="followings" element={<FollowingPage />} />
      <Route path="public_repos" element={<PublicReposPage />} />
      <Route path="*" element={<SearchPage />} />
      </Route>
    </Routes>

    
    </>
  );
}

export default AuthenticatedApp;
