import { useState } from "react";
import octokit from "../services/github-service";
import styled from "@emotion/styled";

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

function FollowingsPage() {
  const user = JSON.parse(localStorage.getItem("Profile"));
  const [followings, setFollowings] = useState(null);

  octokit
    .request("GET /users/{username}/following", {
      username: `${user.login}`,
    })
    .then((response) => {
      setFollowings(response.data);
      // console.log(followers);
    })
    .catch(console.log);
  return (
    <>
      {followings ? (
        <FollowersTitle>Followings ( {followings.length} ) </FollowersTitle>
      ) : (
        ""
      )}
      <FollowersWrapper>
        {followings
          ? followings.map((following) => {
              return (
                <FollowersCard>
                  <FollowersAvatar src={following.avatar_url} alt="dn" />
                  <p>{following.login}</p>
                </FollowersCard>
              );
            })
          : ""}
      </FollowersWrapper>
    </>
  );
}

export default FollowingsPage;
