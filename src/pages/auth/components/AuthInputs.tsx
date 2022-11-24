import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";
import SubmitButton from "../../../components/UI/button/SubmitButton";
import AuthInput from "../../../components/UI/input/AuthInput";
import ErrorPanel from "../../../components/UI/panel/ErrorPanel";
import classes from "../styles/AuthInputs.module.scss";

interface AuthInputProps {
    isLogin: boolean;
    isLoading: boolean;
    authCallback: Function;
    error: FetchBaseQueryError | SerializedError | undefined;
}

const AuthInputs = (props: AuthInputProps) => {
    const { isLogin, authCallback, isLoading, error } = props;
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    console.log(error);

    return (<div className={classes.authInputs}>
        { isLogin 
        ? <h1>Login</h1>
        : <h1>Registration</h1>
        }
        { error
        ? <ErrorPanel message={error.data.message} />
        : ''
        }
        { isLogin 
        ? <>
            <div className={classes.inputContainer}>
                <AuthInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" type="text"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput placeholder="Password" type="password"/>
            </div>
            <div className={classes.buttonContainer}>
                <SubmitButton style={{marginTop: 10}} onClick={() => { authCallback(null); }}>{!isLoading ? "Login" : "..."}</SubmitButton>
            </div>
        </>
        : <>
            <div className={classes.inputContainer}>
                <AuthInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" type="text"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
            </div>
            <div className={classes.inputContainer}>
                <AuthInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
            </div>
            <div className={classes.buttonContainer}>
                <SubmitButton style={{marginTop: 10}} onClick={() => { authCallback({name, email, password}); }}>{!isLoading ? "Registration" : "..."}</SubmitButton>
            </div>
        </>
        }
    </div>)
}

export default AuthInputs;