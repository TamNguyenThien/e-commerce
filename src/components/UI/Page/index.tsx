import { FunctionComponent } from 'react';

// Styles
import styles from './Page.module.scss';

// Utilities
import classnames from 'classnames';

// Contexts
import { useViewDetected } from '@Components/Utils/ViewDetected';

interface PageProps {
    className?: string;
}

const Page: FunctionComponent<PageProps> = (props) => {
    const { deviceType } = useViewDetected();

    return <div className={classnames([styles.wrapper, props.className, styles[deviceType]])}>{props.children}</div>;
};

export default Page;
