import { useState, useEffect } from 'react';
import Slider from './SlideOut';
import styled from 'styled-components';
import { mediaQueries } from '../../config/configuration';

const BurgerWapper = styled.div`
  @media (min-width: ${mediaQueries.ipad}) {
    display: none;
  }
`;

const StyledBurger = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  right: 2rem;
  top: 4rem;
  z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--text-color);
    border-radius: 10px;
    transform-origin: 1px;
    transition: ${({ open }) =>
      open ? 'transform 0.1s linear' : 'transform 0.1s linear'};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      visibility: ${({ open }) => (open ? 'hidden' : 'revert')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ links, sliderColor }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open === true) document.body.style.overflow = 'hidden';
    if (open !== true) document.body.style.overflow = '';
  }, [open]);

  return (
    <BurgerWapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Slider open={open} sliderColor={sliderColor} links={links} />
    </BurgerWapper>
  );
};

export default Burger;
