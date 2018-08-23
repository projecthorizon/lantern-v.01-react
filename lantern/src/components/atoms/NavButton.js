import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5%;
  width: 15%;
  height: 2em;
  border: 1px solid red;
  font-size: 1.5em;

  :hover {
    background-color: blue;
  }
`;

export default class NavButton extends PureComponent {
  render() {
    const { path, children } = this.props;
    return (
      <StyledButton>
        <Link to={path}>{children}</Link>
      </StyledButton>
    );
  }
}
