import styles from "./styles/ErrorPanel.module.scss";

interface ErrorPanelProps {
    message: string;
}

const ErrorPanel = (props: ErrorPanelProps) => {
    const { message } = props;

    return <div className={styles.errorPanel}>{ message }</div>
}

export default ErrorPanel;