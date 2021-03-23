import LayoutContainer from '@Components/Layout/Components/Container';
import React, { FunctionComponent } from 'react';

import styles from './Navbar.module.scss';
interface NavbarProps {}
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <div className={styles.navbar}>
            <LayoutContainer className={styles.container}>
                <div className={styles.header_name}>INTERIOR DESIGN</div>
                <div className={styles.nav_items}>
                    <span className={styles.nav_item}>HOME</span>
                    <span className={styles.nav_item}>ABOUT</span>
                    <span className={styles.nav_item}>SERVICES</span>
                    <span className={styles.nav_item}>GALLERY</span>
                    <span className={styles.nav_item}>BLOG</span>
                    <span className={styles.nav_item}>CONTACT</span>
                </div>
            </LayoutContainer>
        </div>
    );
};
export default Navbar;
