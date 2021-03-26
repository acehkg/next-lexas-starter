import styled from 'styled-components';
import Logo from './Logo';
import DesktopLinks from './DesktopLinks';
import Burger from './Burger';

const Head = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
`;
const Header = ({
  height,
  background,
  sliderColor,
  logoSrc,
  logoHeight,
  logoWidth,
  links,
}) => {
  return (
    <Head height={height} background={background}>
      <Logo
        image={logoSrc}
        alt='logo'
        width={logoWidth}
        height={logoHeight}
        wrapperHeight={height}
      />
      <DesktopLinks links={links} />
      <Burger links={links} sliderColor={sliderColor} />
    </Head>
  );
};

export default Header;
