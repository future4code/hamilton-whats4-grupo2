import React, { Component } from "react";
import styled from "styled-components";
import ConversationMsg from "./ConversationMsg";

export default class ConversationBox extends Component {
  conversationList = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(
        <ConversationMsg
          user={i % 2 == 0 ? "cazuza" : "eu"}
          msg="dafuq! dafuq! dafu! k1 k2 k3 k4 k5 lemme out"
          clip={true}
        />
      );
    }
    return arr;
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Viewport>
          <Conversation>{this.conversationList()}</Conversation>
        </Viewport>
        <Footer />
      </Wrapper>
    );
  }
}

const Footer = styled.div`
  height: 100px;
  background-color: red;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const Header = styled.div`
  height: 55px;
  flex: none;
  background-color: #ededed;
`;

const Viewport = styled.div`
  background-color: #e5ddd5;
  height: 100%;
  overflow-y: scroll;
`;

const Conversation = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5vw;
  padding-bottom: 20px;
`;
