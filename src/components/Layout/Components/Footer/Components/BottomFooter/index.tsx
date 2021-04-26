import { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import LayoutContainer from '@Components/Layout/Components/Container';

// Styles
import styles from './BottomFooter.module.scss';

const BottomFooter: FunctionComponent = () => {
    return (
        <div className={classnames([styles.wrapper])}>
            <LayoutContainer className={styles.main}>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>INTERIOR DESIGN</div>

                    <div className={classnames([styles.address_wrapper, styles.w_285])}>
                        <div className={styles.name}>About Us</div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>Projects</div>
                    <div className={classnames([styles.address_wrapper])}>WHMCS-bridge</div>
                    <div className={classnames([styles.address_wrapper])}>Search Domain</div>
                    <div className={classnames([styles.address_wrapper])}>My Account</div>
                    <div className={classnames([styles.address_wrapper])}>Shopping Cart</div>
                    <div className={classnames([styles.address_wrapper])}>Our Shop</div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>Contact us</div>
                    <div className={classnames([styles.address_wrapper])}>Address : C-308 New Delhi</div>
                    <div className={classnames([styles.address_wrapper])}>Phone : +91 9348394893</div>
                    <div className={classnames([styles.address_wrapper])}>Email : info@colorlib.com</div>
                </div>

                <div className={styles.col}>
                    <div className={styles.title}>Newsletter</div>
                    <div className={classnames([styles.address_wrapper, styles.w_216])}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                    <input />
                    <button>Subscript</button>
                </div>
            </LayoutContainer>
        </div>
    );
};

export default BottomFooter;
