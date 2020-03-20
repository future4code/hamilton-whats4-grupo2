import React, { Component } from "react";
import styled from "styled-components";
import ConversationMsg from "./ConversationMsg";
import ComponenteFormMsgs from "../ComponenteFormMsgs/ComponenteFormMsgs";

export default class ConversationBox extends Component {
  state = {
    feedMensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  enviaMensagem = event => {
    event.preventDefault();
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };
    const novasMensagens = [...this.state.feedMensagens, novaMensagem];

    this.setState({ feedMensagens: novasMensagens, valorInputMensagem: "" });
  };

  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  onChangeInputMensagem = event => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    let listaDeMensagens = this.state.feedMensagens.map(element => (
      <ConversationMsg
        user={element.usuario}
        msg={element.mensagem}
        clip={true}
      ></ConversationMsg>
    ));
    return (
      <Wrapper>
        <Header />
        <Viewport>
          <Conversation>{listaDeMensagens}</Conversation>
        </Viewport>
        <ComponenteFormMsgs
          valorInputMensagem={this.state.valorInputMensagem}
          onChangeInputMensagem={this.onChangeInputMensagem}
          valorInputUsuario={this.state.valorInputUsuario}
          onChangeInputUsuario={this.onChangeInputUsuario}
          enviaMensagem={this.enviaMensagem}
        />
      </Wrapper>
    );
  }
}

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
  background-color: #382F2F /*#ededed*/;
`;

const Viewport = styled.div`
  background-color: #C7ADAD /*#e5ddd5*/;
  height: 100%;
  overflow-y: scroll;
`;

const Conversation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5vw;
  padding-bottom: 20px;
`;
