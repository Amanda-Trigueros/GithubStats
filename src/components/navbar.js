import styled from "@emotion/styled";

import { RiUser3Fill, RiSearchFill, RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 0.2rem;
  gap: 0.5rem;
`;
const WrapperContainer = styled.footer`
  border-top: 2px solid #bdbdbd;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  position: fixed;
  bottom: 0;
  left: 0;
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
    <div>
      <WrapperContainer>
        <Wrapper>
          {navigation.map((nav, index) => (
            <>
              <Link to={nav.to} key={`eq${index}`}>
                {nav.icon}
              </Link>
            </>
          ))}
        </Wrapper>
      </WrapperContainer>
    </div>
  );
}

export default Navbar;
