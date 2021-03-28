import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  align-items: center;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 2rem;
  margin-left: -0.5rem;
`;

const Name = styled.h2`
  font-size: 2rem;
`;
const Message = styled.p`
  font-size: 1rem;
  padding-top: 2rem;
`;
const Thanks = () => {
  return (
    <Wrapper>
      <Name>Thanks!</Name>
      <Message>We will be in touch soon.</Message>
      <Link href='/'>
        <LinkWrapper>
          <ArrowLeft size={32} stroke={2} fill={'black'} />
          <a>Back Home</a>
        </LinkWrapper>
      </Link>
    </Wrapper>
  );
};

export default Thanks;
