import { FunctionComponent } from 'react';

// Contexts
import { useViewDetected } from '@Components/Utils/ViewDetected';

// Styles
import styles from './Container.module.scss';

// Utilities
import classnames from 'classnames';

interface LayoutContainerProps {
    className?: string;
}

const LayoutContainer: FunctionComponent<LayoutContainerProps> = ({ className, ...props }) => {
    const { deviceType } = useViewDetected();
    console.log(deviceType, 'de');

    return <div className={classnames([styles.container, styles[deviceType], className])}>{props.children}</div>;
};

export default LayoutContainer;
