import { FunctionComponent } from 'react';

// Components
import TopFooter from './Components/TopFooter';
import MiddleFooter from './Components/MiddleFooter';
import BottomFooter from './Components/BottomFooter';

// Styles
import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
    return (
        <footer className={styles.wrapper}>
            <div>
                {/* <TopFooter /> */}
                {/* <MiddleFooter /> */}
                <BottomFooter />
            </div>
        </footer>
    );
};

export default Footer;
