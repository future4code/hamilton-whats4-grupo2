import React from "react";
import styled from "styled-components";

class FormMsg extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <InputName
            value={this.props.valorInputUsuario}
            onChange={this.props.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <InputMsg
            value={this.props.valorInputMensagem}
            onChange={this.props.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar onClick={this.props.enviaMensagem}>Enviar</BotaoEnviar>
        </Form>
      </div>
    );
  }
}

const InputName = styled.input`
  padding: 10px;
  width: 10%;
  min-width: 75px;
  margin: 10px;
  border-radius: 4px;
`;
const InputMsg = styled.input`
  padding: 10px;
  width: 77%;
  margin: 10px;
  border-radius: 4px;
`;

const BotaoEnviar = styled.button`
  background-color: #752728;
  color: #c7adad;
  padding: 10px;
  border: none;
  width: fit-content;
  border-radius: 4px;
  font-weight: 900;
  margin: 10px;
`
const Form = styled.form `
  display: flex;
`

export default FormMsg;
