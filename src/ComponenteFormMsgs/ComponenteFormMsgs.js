import React from "react";
import styled from "styled-components";
import shortid from "shortid";

class FormMsg extends React.Component {
  state = {
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = event => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.enviaMensagem({
      user: this.state.valorInputUsuario,
      msg: this.state.valorInputMensagem,
      msgId: shortid.generate()
    });

    this.setState({
      valorInputMensagem: ""
    });
  };

  render() {
    const { valorInputUsuario, valorInputMensagem } = this.state;
    return (
      <div>
        <Form>
          <InputName
            value={valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <InputMsg
            value={valorInputMensagem}
            onChange={this.onChangeInputMensagem}
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
