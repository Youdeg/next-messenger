import SubmitButton from "../../../components/UI/button/SubmitButton";
import AuthInput from "../../../components/UI/input/AuthInput";
import classes from "../styles/AuthInputs.module.scss";

interface AuthInputProps {
    isLogin: boolean;
}

const AuthInputs = (props: AuthInputProps) => {
    const { isLogin } = props;

    return (<div className={classes.authInputs}>
        { isLogin 
        ? <h1>Login</h1>
        : <h1>Registration</h1>
        }

        { isLogin 
        ? <>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Username" type="text"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Password" type="password"/>
            </div>
            <div className={classes.buttonContainer}>
                <SubmitButton style={{marginTop: 10}}>Login</SubmitButton>
            </div>
        </>
        : <>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Username" type="text"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Email" type="email"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Password" type="password"/>
            </div>
            <div className={classes.buttonContainer}>
                <SubmitButton style={{marginTop: 10}}>Registration</SubmitButton>
            </div>
        </>
        }
    </div>)
}

export default AuthInputs;