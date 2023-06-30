import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
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

`;
const ButtonName = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

const ButtonIcon = styled.img`
  margin: auto;   

`

function handleClick(event) {

}

function ShowUser({ user, onAddFavorite, isFavorite }) {
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
  return (
    <>
      {user ? (
        <div>
          <UserImg src={user.avatar_url} />
          <UserName>
            {user.name}
            <button onClick={onAddFavorite}>
              {isFavorite ? favoriteUser : notFavoriteUser}
            </button>
          </UserName>
          <UserBio>{user.bio}</UserBio>
          <UserButtons>
            <ButtonIcon src={require("../assets/icons/followers.png")} alt="icon"/>
            {user.followers} <ButtonName>followers</ButtonName>{" "}
          </UserButtons>
          <UserButtons>
            <ButtonIcon src={require("../assets/icons/followings.png")} alt="icon"/>
            {user.following} <ButtonName>followings</ButtonName>{" "}
          </UserButtons>
          <UserButtons>
            <ButtonIcon src={require("../assets/icons/repos.png")} alt="icon"/>
            {user.public_repos} <ButtonName>public repos</ButtonName>{" "}
          </UserButtons>
          <UserButtons>
            <ButtonIcon src={require("../assets/icons/gist.png")} alt="icon"/>
            {user.public_gists} <ButtonName>public gists</ButtonName>{" "}
          </UserButtons>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ShowUser;
