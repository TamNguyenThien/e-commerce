import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

// Styles
import styles from './Layout.module.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useViewDetected } from '@Components/Utils/ViewDetected';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    const { deviceType } = useViewDetected();
    console.log(deviceType);
    const className = classnames([styles.layout]);
    return (
        <div className={className}>
            {/* <Header /> */}
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
