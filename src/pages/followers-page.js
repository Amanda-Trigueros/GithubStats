import { useState } from "react";
import octokit from "../services/github-service";
function FollowersPage() {
  const user = JSON.parse(localStorage.getItem("Profile"));
  const [followers, setFollowers] = useState(null);

  octokit
    .request("GET /users/{username}/followers", {
      username: `${user.login}`,
    })
    .then((response) => {
      setFollowers(response.data);
      // console.log(followers);
    });
  return (
    <>
      {followers
        ? followers.map((follower) => {
            return (
              <>
                <img src={follower.avatar_url} alt="dn" />
                <p>{follower.login}</p>
              </>
            );
          })
        : ""}
    </>
  );
}

export default FollowersPage;
