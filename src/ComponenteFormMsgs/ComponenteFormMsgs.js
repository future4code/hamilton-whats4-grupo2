import React from "react";
import styled from "styled-components";

class FormMsg extends React.Component {
  render() {
    return (
      <div>
        <form>
          <InputName
            value={this.props.valorInputUsuario}
            onChange={this.props.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <InputMsg
            className="inputMsg"
            value={this.props.valorInputMensagem}
            onChange={this.props.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar onClick={this.props.enviaMensagem}>Enviar</BotaoEnviar>
        </form>
      </div>
    );
  }
}

const MsgUsuario = styled.p`
  background-color: #c7adad;
  color: #382f2f;
  width: fit-content;
  border: 1px solid #382f2f;
`;
const InputName = styled.input`
  padding: 10px;
  width: 10%;
`;
const InputMsg = styled.input`
  padding: 10px;
  width: 20%;
  transition: width 0.4s ease-in-out;

  &:focus {
    width: 60%;
  }
`;

const BotaoEnviar = styled.button`
  background-color: #752728;
  color: #c7adad;
  padding: 12px;
  border: none;
`;

export default FormMsg;
