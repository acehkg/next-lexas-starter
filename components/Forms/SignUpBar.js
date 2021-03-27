import styled from 'styled-components';
import SignUpForm from '../Forms/SignUp';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
`;
const SignUpBar = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUpBar;
