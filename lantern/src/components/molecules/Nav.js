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
    const { logo, routes, handleClick } = this.props;
    const navRoutes = routes.filter(route => route.navButton);
    const navButtons = navRoutes.map((route, i) => (
      <NavButton key={i} path={route.path} cardNums={route.cardNums} handleClick={handleClick}>
        {route.text}
      </NavButton>
    ));

    return logo ? (
      <StyledNav>
        <Logo name={logo} />
        {navButtons}
      </StyledNav>
    ) : (
      <StyledNav>{navButtons}</StyledNav>
    );
  }
}
