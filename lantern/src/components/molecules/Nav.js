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

const StyledBreak = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;

export default class Nav extends PureComponent {
  render() {
    const { logo, routes } = this.props;
    const navRoutes = routes.filter(route => route.navButton);
    const navButtons = navRoutes.map((route, i) => (
      <NavButton key={i} path={route.path}>
        {route.text}
      </NavButton>
    ));

    return (
      <StyledNav>
        <Logo name={logo} />
        {navButtons}
      </StyledNav>
    );
  }
}
