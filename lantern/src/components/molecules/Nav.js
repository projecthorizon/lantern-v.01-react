import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    const { logoName, routes } = this.props;
    const navButtons = routes.map((route, i) => (
      <NavButton key={i} path={route.path}>
        {route.text}
      </NavButton>
    ));
    const navRoutes = routes.map((route, i) => (
      <Route key={i} path={route.path} component={route.component} />
    ));
    return (
      <Router>
        <StyledNav>
          <Logo name={logoName} />
          {navButtons}
          {navRoutes}
        </StyledNav>
      </Router>
    );
  }
}
