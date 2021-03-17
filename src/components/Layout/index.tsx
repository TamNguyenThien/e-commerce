import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

// Styles
import styles from './Layout.module.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    const className = classnames([styles.layout]);
    return (
        <div className={className}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
