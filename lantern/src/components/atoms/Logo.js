import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLogo = styled.div`
  display: inline-flex;
  width: 40%;
  border: 1px solid blue;
  margin: 0;
`;

export default class Logo extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <StyledLogo>
        <h1>{name}</h1>
      </StyledLogo>
    );
  }
}
