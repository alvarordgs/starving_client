import { Container, Form, SubContainer, ErroMsg } from './loginStyle';
import Input from '../../Components/Login/Input/Input';
import Botao from '../../Components/Login/Botao/Botao';

// eslint-disable-next-line react/prop-types
const Login = ({ handleSubmit, loading, handleChange, validadorInput, erro}) => {

    return (
        <Container>
            <Form>
                <img src="./../../../assets/logos/logo-starving-white.svg" alt="Logo Starving"/>
                <h1>Login</h1>
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                />

                <ErroMsg style={erro != '' ? {display: "block"} : {display: "none"}}>
                    {erro}
                </ErroMsg>

                <Botao
                    type='submit'
                    text='Entrar'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()}
                />

                <SubContainer>
                    <p>Não possui conta ?</p>
                    <a href="#">Cadastrar</a>
                </SubContainer>
            </Form>
        </Container>
    )
}

export default Login;