import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useState } from 'react';
import FooterButton from '../../components/UI/button/FooterButton';
import AuthInputs from "./components/AuthInputs";
import AuthPanel from "./components/AuthPanel";
import classes from './styles/Auth.module.scss';

interface AuthPanelProps {
    footerOnClick: (e: React.MouseEvent) => void;
    isLogin: boolean;
    isLoading: boolean;
    authCallback: Function;
    error: FetchBaseQueryError | SerializedError | undefined;
}


const Auth = (props: AuthPanelProps) => {
    const { footerOnClick, isLogin, authCallback, isLoading, error } = props;

    return (
        <AuthPanel>
            <div className={classes.leftPanelContainer}>
            </div>
            <div className={classes.rightPanelContainer}>
            <AuthInputs isLogin={isLogin} authCallback={authCallback} isLoading={isLoading} error={error}/>
            <FooterButton onClick={footerOnClick}>
                { isLogin 
                ? "Create your Account..."
                : "Already have an Account?"
                }
            </FooterButton>
            </div>
        </AuthPanel>
    )
}

export default Auth;