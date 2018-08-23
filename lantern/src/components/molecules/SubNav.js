import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubNavButton } from '../atoms';

const StyledSubNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class SubNav extends PureComponent {
  render() {
    const { subNavLinks } = this.props;
    const navButtons = subNavLinks.map((link, i) => (
      <SubNavButton key={i} url={link.url}>
        {link.text}
      </SubNavButton>
    ));
    return <StyledSubNav>{navButtons}</StyledSubNav>;
  }
}
