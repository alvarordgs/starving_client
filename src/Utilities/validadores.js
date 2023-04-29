const validarEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.') 
}

const validarSenha = (senha) => {
    return senha?.toString().length > 3;
}

export {
    validarEmail,
    validarSenha
}