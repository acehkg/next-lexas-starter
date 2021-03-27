import styled from 'styled-components';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else if (variant === 'ghost') {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component type='submit' style={styles}>
      {children}
    </Component>
  );
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: var(--primary-color);

  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--primary-color);
  color: var(--white-color);

  &:hover {
    background-color: var(--primary-light);
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: var(--white-color);
  color: var(--primary-color);
  border: 2px solid currentColor;

  &:hover {
    background-color: var(--offwhite-color);
  }
`;
const GhostButton = styled(ButtonBase)`
  color: var(--dark-background);
  background-color: transparent;
  outline-color: var(--dark-background);

  &:hover {
    background: var(--light-background);
    color: var(--black-color);
  }
`;

export default Button;
