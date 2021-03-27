import styled from 'styled-components';

import Icon from '../Icon';
import VisuallyHidden from '../VisullayHidden';

import { mediaQueries } from '../../config/configuration';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 300, size, ...delegated }) => {
  const styles = STYLES[size];

  // TODO: validate size
  if (!size) {
    throw new Error('No Size Entered');
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: var(--dark-background);
  &:hover {
    color: balck;
  }

  @media (max-width: ${mediaQueries.medium}) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid black;
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: var(--light-background);
  }
`;

export default IconInput;
