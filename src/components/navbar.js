import styled from "@emotion/styled";
import { SiGithub, SiGithuh } from "react-icons/si";
import { RiUser3Fill, RiSearchFill, RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

function Navbar() {
  const navigation = [
    {
      to: "/profile",
      icon: <RiUser3Fill size={50} color={"#BDBDBD"} />,
    },
    {
      to: "/search-page",
      icon: <RiSearchFill size={50} color={"#BDBDBD"} />,
    },
    {
      to: "/favorites",
      icon: <RiStarFill size={50} color={"#BDBDBD"} />,
    },
  ];

  return (
    <Wrapper>
      {navigation.map((nav, index) => (
        <>
          <Link to={nav.to} key={`eq${index}`}>
            {nav.icon}
          </Link>
        </>
      ))}
    </Wrapper>
  );
}

export default Navbar;
