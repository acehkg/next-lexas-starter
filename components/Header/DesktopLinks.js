import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.nav`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;

  a {
    &:not(:first-child) {
      padding-left: 5rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const DesktopLinks = ({ links }) => {
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

export default DesktopLinks;
