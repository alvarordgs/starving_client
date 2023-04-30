import { Container, Form, SubContainer } from './loginStyle';
import Input from '../../Components/Login/Input/Input';
import Botao from '../../Components/Login/Botao/Botao';

// eslint-disable-next-line react/prop-types
const Login = ({ handleSubmit, loading, handleChange, validadorInput }) => {

    return (
        <Container>
            <Form>
                <h1>Faça seu login 🖖</h1>
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