import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.height};
`;
const Logo = ({ image, height, width, alt, wrapperHeight }) => {
  return (
    <Wrapper height={wrapperHeight}>
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        layout='responsive'
      />
    </Wrapper>
  );
};
export default Logo;
