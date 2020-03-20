import React, { Component } from "react";
import styled from "styled-components";
import ConversationMsg from "./ConversationMsg";

export default class ConversationBox extends Component {
  conversationList = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(
        <ConversationMsg
          user="cazuza"
          msg="dafuq! dafuq! dafu! k1 k2 k3 k4 k5 lemme out"
        />
      );
    }
    return arr;
  };

  render() {
    return (
      <ConversationWrapper>
        <ConversationHeader></ConversationHeader>
        <ConversationDisplay>
          <OverflowView>{this.conversationList()}</OverflowView>
        </ConversationDisplay>
      </ConversationWrapper>
    );
  }
}

const ConversationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const ConversationHeader = styled.div`
  height: 55px;
  flex: none;
  background-color: #ededed;
`;

const ConversationDisplay = styled.div`
  background-color: #e5ddd5;
  height: 100%;
  overflow-y: scroll;
`;

const OverflowView = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5vw;
  padding-bottom: 20px;
`;
