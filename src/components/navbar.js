import styled from "@emotion/styled";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ProfileIcon = styled.img`

`;

const SearchIcon = styled.img`

`;

const FavIcon = styled.img`

`;

function Navbar() {
  const navigation = [
    {
      to: "/profile",
      icon: <ProfileIcon src="./assets/icons/user-3-fill.png"/>,
    },
    {
      to: "/search-page",
      icon: <SearchIcon src="./assets/icons/search-fill.png"/>,
      
    },
    {
      to: "/favorites",
      icon: <FavIcon src="./star-line.png"/>,
      
    },
    
  ];

  return (
    <Wrapper>
      {navigation.map((nav) => (
        <>
        {nav.icon}
        <ProfileIcon src="./star-line.png"/>
        </>
      ))}
    </Wrapper>
  );
}

export default Navbar;