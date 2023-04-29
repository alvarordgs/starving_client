import { useState } from 'react';
import { Container, Form, RodapeForm } from './loginStyle';
import Input from '../../Components/Input/Input';
import Botao from '../../Components/Botao/Botao';
import { validarEmail, validarSenha } from '../../Utilities/validadores';
import UserService from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';

const userService = new UserService('https://reqres.in/api');

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form);
            if(response === true) {
                alert('usuario logado com sucesso');
                navigate('/home');
            }
            setLoading(false)
        } catch(err) {
            alert('Algo deu errado com o login...' + err)
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    }

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
                <RodapeForm>
                    <p>Não possui conta ?</p>
                    <a href="#">Cadastrar</a>
                </RodapeForm>
            </Form>
        </Container>
    )
}

export default Login;