import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Logo } from '../atoms';
import { NavButton } from '../atoms';

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Nav extends PureComponent {
  render() {
    return (
      <StyledNav>
        <Logo name="Lantern" />
        <NavButton link="#">Why We Exist</NavButton>
        <NavButton link="#">What We Do</NavButton>
        <NavButton link="#">Candidate Development</NavButton>
        <NavButton link="#">Consultative Recruiting</NavButton>
      </StyledNav>
    );
  }
}
