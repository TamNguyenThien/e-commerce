import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

// Components
import Link from 'next/link';

// Icons

// Utilities
import classnames from 'classnames';

// Styles
import styles from './HeaderNavbar.module.scss';

const Header: FunctionComponent = () => {
    const className = classnames([
        styles.wrapper,
        {
            navbar: 'desktop',
        },
    ]);
    const NavBar = dynamic(() => import('@Components/Layout/Components/Header/Components/DesktopNavbar'));

    return (
        <div className={className}>
            <div className={styles.menu}>
                <Link href="/">
                    <a href="#" className={styles.brand}>
                        <img src="/assets/logo.svg" width={'113px'} height={'36px'} />
                    </a>
                </Link>
                <NavBar />
            </div>
        </div>
    );
};

export default Header;
