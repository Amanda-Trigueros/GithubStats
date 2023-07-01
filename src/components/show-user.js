import styled from "@emotion/styled";
import { useEffect } from "react";
import { RiStarFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { colors } from "../styles";

const UserImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;
const UserName = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;
const UserBio = styled.p`
  font-weight: 400;
  font-size: 16px;
`;
const UserButtons = styled.button`
  width: 140px;
  height: 140px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  font-size: 28px;
  cursor: pointer;
`;
const ButtonName = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

const ButtonIcon = styled.img`
  margin: auto;
`;

function ShowUser({ user, onAddFavorite, isFavorite, onRemoveFavorite }) {
  const notFavoriteUser = (
    <>
      <RiStarFill color={colors.gray.light} />
    </>
  );

  const favoriteUser = (
    <>
      <RiStarFill color={colors.yellow[500]} />
    </>
  );
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(`/${path}`);
  }
  // useEffect(() => navigate());
  return (
    <>
      {user ? (
        <>
          <UserImg src={user.avatar_url} />
          <UserName>
            {user.name}
            <button onClick={isFavorite ? onRemoveFavorite : onAddFavorite}>
              {isFavorite ? favoriteUser : notFavoriteUser}
            </button>
          </UserName>
          <UserBio>{user.bio}</UserBio>
          <UserButtons>
            <ButtonIcon
              onClick={() => navigate("/followers")}
              src={require("../assets/icons/followers.png")}
              type="submit"
            />
            {user.followers} <ButtonName>followers</ButtonName>
          </UserButtons>
          <UserButtons>
            <ButtonIcon
              onClick={() => navigate("/followings")}
              src={require("../assets/icons/followings.png")}
              alt="icon"
            />
            {user.following} <ButtonName>followings</ButtonName>
          </UserButtons>
          <UserButtons>
            <ButtonIcon
              onClick={() => navigate("/public_repos")}
              src={require("../assets/icons/repos.png")}
              alt="icon"
            />
            {user.public_repos} <ButtonName>public repos</ButtonName>
          </UserButtons>
          <UserButtons>
            <ButtonIcon
              onClick={() => navigate("/public_gists")}
              src={require("../assets/icons/gist.png")}
              alt="icon"
            />
            {user.public_gists} <ButtonName>public gists</ButtonName>
          </UserButtons>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ShowUser;
