import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubNavButton } from '../atoms';

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Nav extends PureComponent {
  render() {
    return (
      <StyledNav>
        <SubNavButton link="#">Career Discovery</SubNavButton>
        <SubNavButton link="#">Immediate Employment</SubNavButton>
        <SubNavButton link="#">Full Service Package</SubNavButton>
      </StyledNav>
    );
  }
}
