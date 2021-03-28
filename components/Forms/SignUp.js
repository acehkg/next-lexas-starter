import { useForm } from 'react-hook-form';
import IconInput from '../Forms/IconInput';
import styled from 'styled-components';
import Button from '../Button';
import { mediaQueries } from '../../config/configuration';
import axios from 'axios';

const Wrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-top: 1rem;

  @media (max-width: ${mediaQueries.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ErrWrapper = styled.div`
  position: relative;
  @media (max-width: ${mediaQueries.medium}) {
    margin-bottom: 1rem;
  }
`;
const Err = styled.p`
  position: absolute;
  padding-top: 0.5rem;
  bottom: -1;
  left: 0;
  font-size: 0.75rem;
  color: red;
  text-align: center;

  @media (max-width: ${mediaQueries.medium}) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;
const SignUpForm = () => {
  //import required functions from useForm hook
  const { register, handleSubmit, errors } = useForm();
  //empty callback for errors to display
  const handleErrors = (errors) => {};

  const onSubmit = async (data, e) => {
    e.target.reset();
    await axios.post('/api/submitContact', data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit, handleErrors)}>
      <ErrWrapper>
        <IconInput
          label='name'
          icon='name'
          size='large'
          type='text'
          name='name'
          placeholder='Jane Doe'
          rules='required'
          formRef={register({
            required: {
              value: true,
              message: 'Please Enter Your Name',
            },
            pattern: {
              value: /[A-Za-z]{3}/,
              message: 'Please Enter Your Name',
            },
          })}
        />
        {errors?.name && <Err>{errors.name.message}</Err>}
      </ErrWrapper>
      <ErrWrapper>
        <IconInput
          formRef={register({
            required: {
              value: true,
              message: 'Please Enter Your Email',
            },
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

              message: 'Please Enter Your Email',
            },
          })}
          label='email'
          icon='email'
          size='large'
          type='text'
          name='email'
          placeholder='jane@example.com'
        />
        {errors?.email && <Err>{errors.email.message}</Err>}
      </ErrWrapper>
      <Button variant='fill' size='small'>
        SIGN UP
      </Button>
    </Wrapper>
  );
};

export default SignUpForm;
