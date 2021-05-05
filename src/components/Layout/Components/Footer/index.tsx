import { FunctionComponent } from 'react';

// Components
import TopFooter from './Components/TopFooter';
import BottomFooter from './Components/BottomFooter';

// Styles
import styles from './Footer.module.scss';
import Page from '@Components/UI/Page';

const Footer: FunctionComponent = () => {
    return (
        <Page className={styles.wrapper}>
            <BottomFooter />
            <TopFooter />
        </Page>
    );
};

export default Footer;
