import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5%;
  width: 15%;
  height: 2em;
  border: 1px solid green;
  font-size: 1.5em;
`;

export default class SubNavButton extends PureComponent {
  render() {
    const { link, children } = this.props;
    return (
      <StyledButton>
        <a href={link}>{children}</a>
      </StyledButton>
    );
  }
}
