import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Logo } from '../atoms';
import { NavButton } from '../atoms';

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen {} */
`;

export default class Nav extends PureComponent {
  render() {
    const { logoName, navLinks } = this.props;
    const navButtons = navLinks.map((link, i) => (
      <NavButton key={i} url={link.url}>
        {link.text}
      </NavButton>
    ));
    return (
      <StyledNav>
        <Logo name={logoName} />
        {navButtons}
      </StyledNav>
    );
  }
}
