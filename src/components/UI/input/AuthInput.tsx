import classes from "./styles/AuthInput.module.scss";

interface AuthInputProps { 
    placeholder: string;
    type: string;
}

const AuthInput = (props: AuthInputProps) => {
    const { placeholder, type } = props;

    return (
        <input className={classes.authInput} type={type} placeholder={placeholder} />
    )
}

export default AuthInput;