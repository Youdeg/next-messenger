import {ReactNode} from 'react';
import classes from './styles/SubmitButton.module.scss';

interface SubmitButtonProps {
    children: ReactNode;
    style: object;
}

const SubmitButton = (props: SubmitButtonProps) => {
    const { children } = props;

    return (
        <button {...props} className={classes.submitButton}>
            {children}
        </button>
    )
}

export default SubmitButton;