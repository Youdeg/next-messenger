import { useState } from 'react';
import FooterButton from '../../components/UI/button/FooterButton';
import AuthInputs from "./components/AuthInputs";
import AuthPanel from "./components/AuthPanel";
import classes from './styles/Auth.module.scss';

interface AuthPanelProps {
    footerOnClick: (e: React.MouseEvent) => void;
    isLogin: boolean;
}


const Auth = (props: AuthPanelProps) => {
    const { footerOnClick, isLogin } = props;

    return (
        <AuthPanel>
            <div className={classes.leftPanelContainer}>
            </div>
            <div className={classes.rightPanelContainer}>
            <AuthInputs isLogin={isLogin} />
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