import {ReactNode} from 'react';
import classes from './styles/FooterButton.module.scss';

interface FooterButtonProps {
    children: ReactNode;
    style?: object;
    onClick?: (e: React.MouseEvent) => void;
}

const FooterButton = (props: FooterButtonProps) => {
    const { children } = props;

    return (
        <button {...props} className={classes.footerButton}>
            {children}
        </button>
    )
}

export default FooterButton;