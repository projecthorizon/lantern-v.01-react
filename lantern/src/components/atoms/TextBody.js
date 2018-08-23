import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class TextBody extends PureComponent {
  render() {
    const { text } = this.props;
    return <p>{text}</p>;
  }
}
