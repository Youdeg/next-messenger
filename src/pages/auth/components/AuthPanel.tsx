import {ReactNode} from 'react';
import styles from '../styles/AuthPanel.module.scss';

interface AuthPanelProps { 
    children: ReactNode;
}

const AuthPanel = ({ children }: AuthPanelProps) => {
    return (
        <div className={styles.authPanel}>
            <div className={styles.authPanelContent}>
                { children }
            </div>
        </div>
    )
}

export default AuthPanel;