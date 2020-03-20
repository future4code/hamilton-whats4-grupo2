import React from "react"
import styled from 'styled-components'


class FormMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedMensagens: [
                {
                    usuario: "",
                    mensagem: ""
                }
            ],
            valorInputUsuario: "",
            valorInputMensagem: ""
        }
    }

    enviaMensagem = event => {
        event.preventDefault()
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };
        const novasMensagens = [...this.state.feedMensagens, novaMensagem];

        this.setState({ feedMensagens: novasMensagens });
        this.setState({ valorInputMensagem: "" })
    };

    onChangeInputUsuario = event => {
        this.setState({ valorInputUsuario: event.target.value });
    }; 
    onChangeInputMensagem = event => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    render() {
        const listaDeMensagens = this.state.feedMensagens.map(msg => {
            return (
                <MsgUsuario> <b>{msg.usuario}</b> - {msg.mensagem} </MsgUsuario>
            );
        });
        return ( 
            <div>
                <div>{listaDeMensagens}</div>
                <form>
                    <InputName
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder={"Usuario"}
                    />
                    <InputMsg
                    className="inputMsg"
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder={"Mensagem"}
                    />
                    <BotaoEnviar onClick={this.enviaMensagem}>Enviar</BotaoEnviar>
                </form>
        
            </div>
        )
    }

}

const MsgUsuario = styled.p `   
    background-color: #C7ADAD;
    color: #382F2F;
    width: fit-content;
    border: 1px solid #382F2F;
`
const InputName = styled.input `
    padding: 10px;
    width: 10%;
`
const InputMsg = styled.input `
    padding: 10px;
    width: 20%;
    transition: width 0.4s ease-in-out;

    &:focus{
 width: 60%;
}
`

const BotaoEnviar = styled.button `
    background-color: #752728;
    color: #C7ADAD;
    padding: 12px;
    border: none;
`

export default FormMsg