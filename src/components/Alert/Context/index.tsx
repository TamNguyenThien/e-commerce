import { createContext, FunctionComponent, useContext, useEffect, useMemo, useRef, useState } from 'react';

// Components
import { Modal, ModalBody } from 'reactstrap';

// Styles
import styles from '../Alert.module.scss';

// Utilities
import classnames from 'classnames';
import Image from '@Components/UI/Image';

interface AlertProps extends AlertState {
    open: boolean;
}

let timeoutAnimating = null;
const Alert: FunctionComponent<AlertProps> = (props) => {
    const [animating, setAnimating] = useState<boolean>(false);

    useEffect(() => {
        setAnimating(props.open);
    }, [props.open]);

    useEffect(() => {
        if (animating) {
            timeoutAnimating = setTimeout(() => {
                setAnimating(false);
            }, 1500);
        }

        return () => clearTimeout(timeoutAnimating);
    }, []);

    const iconClassName = classnames([
        styles.icon,
        {
            'animate__animated animate__wobble': animating,
        },
    ]);

    return (
        <Modal isOpen={props.open} toggle={props.onClose} className={styles.modal} backdrop={false} modalClassName={styles.wrapper} contentClassName={styles.content}>
            <ModalBody className={styles.body}>
                <Image src={props.icon} className={iconClassName} />
                {props.title && <h3 className={styles.title}>{props.title}</h3>}
                {props.text && <div className={styles.text}>{props.text}</div>}
                <button className={styles.button} onClick={props.onClose}>
                    {props.btnText}
                </button>
            </ModalBody>
        </Modal>
    );
};

interface AlertContextType {
    alert(data: AlertState): void;
}

const initState: AlertContextType = {
    alert: () => null,
};

export const AlertContext = createContext(initState);

export const useAlertContext = () => useContext(AlertContext);

interface AlertState {
    icon?: string;
    text?: string;
    title?: string;
    btnText?: string;
    type: 'error' | 'success';

    onClose?(): void;
    onClick?(): void;
}

interface ProviderProps {}

const defaultAlertState: AlertState = {
    text: null,
    icon: null,
    type: null,
    title: null,
    btnText: 'Đóng',

    onClick: null,
    onClose: null,
};

export const Provider: FunctionComponent<ProviderProps> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [alertState, setAlertState] = useState<AlertState>(defaultAlertState);

    const previousOpen = useRef(open);

    useEffect(() => {
        if (!open) {
            if (previousOpen.current) {
                setAlertState(defaultAlertState);
            }
        }
    }, [open]);

    const alert = (state: AlertState) => {
        setOpen(true);
        setAlertState({ ...defaultAlertState, ...state });
    };

    const handleClose = () => {
        setOpen(false);
        if (alertState.onClick && typeof alertState.onClick === 'function') {
            alertState.onClick();
        }
    };

    const icon = useMemo(() => {
        if (alertState.icon) {
            return alertState.icon;
        }

        switch (alertState.type) {
            case 'success':
                return '/assets/alert/success.png';

            default:
                return '/assets/alert/error.png';
        }
    }, [alertState.icon, alertState.type]);

    return (
        <AlertContext.Provider value={{ alert }}>
            {props.children}

            <Alert {...alertState} icon={icon} open={open} onClose={handleClose} />
        </AlertContext.Provider>
    );
};

Provider.defaultProps = {};

export const withAlert = (WrappedComponent: FunctionComponent<any>) => ({ ...props }) => (
    <Provider>
        <WrappedComponent {...props} />
    </Provider>
);
