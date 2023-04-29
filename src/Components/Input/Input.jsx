/* eslint-disable react/prop-types */
import { InputCustomizado } from "./inputStyle";

const Input = ({
    name,
    placeholder,
    onChange,
    type
}) => {
    return (
        <InputCustomizado
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    )
}

export default Input;