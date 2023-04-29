/* eslint-disable react/prop-types */
import { BotaoCustomizado } from "./botaoStyle";

const Botao = ({
    type,
    text,
    onClick,
    disabled
}) => {
    return (
        <BotaoCustomizado
            type={type}
            onClick={onClick}
            disabled={disabled}
            >
                {text} 
        </BotaoCustomizado>
    )
}

export default Botao;