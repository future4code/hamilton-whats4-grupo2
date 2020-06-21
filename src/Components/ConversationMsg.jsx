import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export default class ConversationMsg extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
    clip: PropTypes.bool
  };

  doubleClickHandler = () => {
    if (window.confirm("Delete Message ?"))
      this.props.deleteMsg(this.props.myId);
  };

  render() {
    const { user, msg, firstMsgFromUser } = this.props;
    let isMainUser = user === "Eu" || user === "eu" || user === "EU";
    return (
      <Container
        firstMsgFromUser={firstMsgFromUser}
        mainUser={isMainUser}
        onDoubleClick={this.doubleClickHandler}
      >
        {isMainUser ? null : <User>{user}:</User>}
        <Msg>{msg}</Msg>
        {firstMsgFromUser ? <Clip mainUser={isMainUser}></Clip> : null}
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: white;
  padding: 5px 10px;
  border-radius: 7px;
  max-width: 250px;
  min-width: 100px;
  min-height: 20px;
  position: relative;
  /* border-top-left-radius: 0px; */
  flex: none;
  margin-top: ${props => (props.firstMsgFromUser ? "20px" : "3px")};

  ${props =>
    props.mainUser &&
    css`
      align-self: flex-end;
      background-color: #ad393b /*#dcf8c6*/;
      color: #d0c5c4;
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
    props.mainUser &&
    css`
      transform: scaleX(-1);
      right: -10px;
      background-color: #ad393b /*#dcf8c6*/;
    `}

  ${props =>
    !props.mainUser &&
    css`
      left: -10px;
    `}
`;
