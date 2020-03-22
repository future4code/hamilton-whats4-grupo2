import React, { Component } from "react";
import styled, { css } from "styled-components";
import ConversationMsg from "./ConversationMsg";
import ComponenteFormMsgs from "../ComponenteFormMsgs/ComponenteFormMsgs";
import downArrow from "../Img/down-arrow.png";

export default class ConversationBox extends Component {
  constructor(props) {
    super(props);

    this.viewportRef = React.createRef();

    this.state = {
      feedMensagens: [],
      showScrollButton: false
    };
  }

  enviaMensagem = msg => {
    const novasMensagens = [...this.state.feedMensagens, msg];

    this.setState({ feedMensagens: novasMensagens });
  };

  removeMsg = id => {
    this.setState({
      feedMensagens: this.state.feedMensagens.filter(
        element => element.msgId !== id
      )
    });
  };

  scrollHandler = event => {
    this.setState({
      showScrollButton: event.target.scrollTopMax - event.target.scrollTop > 0
    });
  };

  scrollDown = () => {
    this.setState({
      showScrollButton: false
    });
    this.viewportRef.current.scrollTop = this.viewportRef.current.scrollTopMax;
  };

  componentDidUpdate() {
    if (!this.state.showScrollButton) {
      this.viewportRef.current.scrollTop = this.viewportRef.current.scrollTopMax;
    }
  }

  render() {
    let listaDeMensagens = this.state.feedMensagens.map((element, index) => (
      <ConversationMsg
        user={element.user}
        msg={element.msg}
        myId={element.msgId}
        key={element.msgId}
        firstMsgFromUser={
          index === 0 ||
          element.user !== this.state.feedMensagens[index - 1].user
        }
        deleteMsg={this.removeMsg}
      ></ConversationMsg>
    ));

    return (
      <Wrapper>
        <Header />
        <Viewport onScroll={this.scrollHandler} ref={this.viewportRef}>
          <Conversation>{listaDeMensagens}</Conversation>
        </Viewport>
        <ComponenteFormMsgs enviaMensagem={this.enviaMensagem} />
        <ScrollButton
          onClick={this.scrollDown}
          visible={this.state.showScrollButton}
        >
          <ScrollImg src={downArrow} />
        </ScrollButton>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const Header = styled.div`
  height: 59px;
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
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 5vw;
  padding-bottom: 20px;
  box-sizing: border-box;
  min-height: 100%;
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 30px;
  width: 15px;
  height: 15px;
  border: none;
  background: white;
  box-sizing: content-box;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0;
  transform: scale(0, 0);
  transition: 0.2s;
  transition-timing-function: ease-out;

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: scale(1, 1);
    `}
`;

const ScrollImg = styled.img`
  width: 100%;
  height: 100%;
  filter: invert(65%) sepia(0%) saturate(1613%) hue-rotate(156deg)
    brightness(89%) contrast(88%);
`;
