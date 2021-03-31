import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const MobileLinks = ({ links }) => {
  const newLinks = Object.entries(links);
  return (
    <Wrapper>
      {newLinks.map((link) => {
        return (
          <Link href={link[1]} key={link[0]}>
            <a>{link[0]}</a>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default MobileLinks;
