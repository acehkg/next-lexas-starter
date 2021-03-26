import styled from 'styled-components';
import MobileLinks from './MobileLinks';
import { navbarSetup } from '../../config/configuration';

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.sliderColor};
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 1;
`;

const Slider = ({ open, sliderColor, links }) => {
  return (
    <Panel open={open} sliderColor={sliderColor}>
      <MobileLinks links={links} />
    </Panel>
  );
};

export default Slider;
