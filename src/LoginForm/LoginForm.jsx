import './loginForm.css';

const LoginForm = () => {
  return (
    <div className="container_login">
        <main className="container_form">
            <form action="/" method="POST">
                <div className="input_group">
                    <label htmlFor="user">E-mail</label>
                    <input type="text" placeholder="E-mail"/>
                </div>
                <div className="input_group">
                    <label htmlFor="password">Senha</label>
                    <input type="text" placeholder="Password"/>
                </div>

                <input type="submit" className='btn_form' value="Entrar"/>
            </form>
        </main>
    </div>
  )
}

export default LoginForm
