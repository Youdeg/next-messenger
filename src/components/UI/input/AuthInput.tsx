import classes from "./styles/AuthInput.module.scss";

interface AuthInputProps { 
    placeholder: string;
    type: string;
    onChange?: (e: any) => void;
    value?: string;
}

const AuthInput = (props: AuthInputProps) => {
    const { placeholder, type } = props;

    return (
        <input {...props} className={classes.authInput} type={type} placeholder={placeholder} />
    )
}

export default AuthInput;