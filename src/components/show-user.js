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
const UserButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  gap: 17px;
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
            <button
              onClick={() =>
                isFavorite ? onRemoveFavorite(user) : onAddFavorite(user)
              }
            >
              {isFavorite ? favoriteUser : notFavoriteUser}
            </button>
          </UserName>
          <UserBio>{user.bio}</UserBio>
          <Wrapper>
            <UserButtons onClick={() => navigate("/followers")}>
              <ButtonIcon src={require("../assets/icons/followers.png")} />
              {user.followers} <ButtonName>followers</ButtonName>
            </UserButtons>
            <UserButtons onClick={() => navigate("/followings")}>
              <ButtonIcon
                src={require("../assets/icons/followings.png")}
                alt="icon"
              />
              {user.following} <ButtonName>followings</ButtonName>
            </UserButtons>
            <UserButtons onClick={() => navigate("/public_repos")}>
              <ButtonIcon
                src={require("../assets/icons/repos.png")}
                alt="icon"
              />
              {user.public_repos} <ButtonName>public repos</ButtonName>
            </UserButtons>
            <UserButtons onClick={() => navigate("/public_gists")}>
              <ButtonIcon
                src={require("../assets/icons/gist.png")}
                alt="icon"
              />
              {user.public_gists} <ButtonName>public gists</ButtonName>
            </UserButtons>
          </Wrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ShowUser;
