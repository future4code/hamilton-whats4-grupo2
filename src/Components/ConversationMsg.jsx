import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export default class ConversationMsg extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
    clip: PropTypes.bool
  };

  render() {
    const { user, msg, clip } = this.props;
    let eu = user === "Eu" || user === "eu" || user === "EU";
    return (
      <Cotainer eu={eu}>
        {eu ? null : <User>{user}:</User>}
        <Msg>{msg}</Msg>
        {clip ? <Clip eu={eu}></Clip> : null}
      </Cotainer>
    );
  }
}

const Cotainer = styled.div`
  background-color: white;
  padding: 5px 10px;
  border-radius: 7px;
  max-width: 250px;
  min-width: 100px;
  min-height: 20px;
  position: relative;
  /* border-top-left-radius: 0px; */
  flex: none;
  margin-top: 20px;

  ${props =>
    props.eu &&
    css`
      align-self: flex-end;
      background-color: #AD393B /*#dcf8c6*/;
      color: #D0C5C4;
    `}
`;

const User = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
`;
const Msg = styled.p`
  font-family: sans-serif;
  font-size: 14px;
`;

const Clip = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  
  ${props =>
    props.eu &&
    css`
      transform: scaleX(-1);
      right: -10px;
      background-color: #AD393B /*#dcf8c6*/;
    `}

  ${props =>
    !props.eu &&
    css`
      left: -10px;
    `}
`;
