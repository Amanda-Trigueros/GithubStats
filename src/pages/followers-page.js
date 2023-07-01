import { useState } from "react";
import octokit from "../services/github-service";
import styled from "@emotion/styled";
import { useAuth } from "../context/user-context";

const FollowersTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 35.2px;
`;

const FollowersAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const FollowersCard = styled.div`
  width: 300px;
  height: 56px;
  border-radius: 4px;
  padding: 8px 12px 8px 12px;
  display: flex;
  gap: 8px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  align-items: center;
`;

const FollowersWrapper = styled.div`
  height: 488px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function FollowersPage() {
  const user = JSON.parse(localStorage.getItem("Profile"));
  // const { user } = useAuth();
  // console.log(user);
  const [followers, setFollowers] = useState(null);

  octokit
    .request("GET /users/{username}/followers", {
      username: `${user.login}`,
    })
    .then((response) => {
      setFollowers(response.data);
      // console.log(followers);
    })
    .catch(console.log);
  return (
    <>
      {followers ? (
        <FollowersTitle>Followers ( {followers.length} ) </FollowersTitle>
      ) : (
        ""
      )}
      <FollowersWrapper>
        {followers
          ? followers.map((follower, index) => {
              return (
                <FollowersCard key={`follow${index}`}>
                  <FollowersAvatar src={follower.avatar_url} alt="dn" />
                  <p>{follower.login}</p>
                </FollowersCard>
              );
            })
          : ""}
      </FollowersWrapper>
    </>
  );
}

export default FollowersPage;
