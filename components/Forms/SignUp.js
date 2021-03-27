import { useEffect } from 'react';
import kwesforms from 'kwesforms';
import IconInput from '../Forms/IconInput';
import styled from 'styled-components';
import Button from '../Button';
import { mediaQueries } from '../../config/configuration';

const Wrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  border: unset;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-top: 1rem;

  @media (max-width: ${mediaQueries.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;
const SignUpForm = () => {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <Wrapper
      className='kwes-form'
      action='https://kwes.io/api/foreign/forms/ztmdCzqww2DIZgvzvHNd'
    >
      <InputWrapper>
        <IconInput
          label='name'
          icon='name'
          size='large'
          type='text'
          name='name'
          placeholder='Jane Doe'
          rules='required'
        />

        <IconInput
          label='email'
          icon='email'
          size='large'
          type='email'
          name='email'
          placeholder='jane@example.com'
          rules='required|email'
        />
        <Button variant='fill' size='small'>
          SIGN UP
        </Button>
      </InputWrapper>
    </Wrapper>
  );
};

export default SignUpForm;
