import { FunctionComponent } from 'react';

// Contexts

// Styles
import styles from './Container.module.scss';

// Utilities
import classnames from 'classnames';

interface LayoutContainerProps {
    className?: string;
}

const LayoutContainer: FunctionComponent<LayoutContainerProps> = ({ className, ...props }) => {
    return <div className={classnames([styles.container, className])}>{props.children}</div>;
};

export default LayoutContainer;
