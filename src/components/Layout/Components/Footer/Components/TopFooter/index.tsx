import { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import LayoutContainer from '@Components/Layout/Components/Container';

// Styles
import styles from './TopFooter.module.scss';

const TopFooter: FunctionComponent = () => {
    return (
        <div className={classnames([styles.wrapper])}>
            <LayoutContainer className={styles.main}>
                <h3 className={styles.title}>ĐƯỢC BẢO TRỢ THÔNG TIN BỞI</h3>
                <div className={styles.icon_google} />
                <div className={styles.icon_facebook} />
                <div className={styles.hint}>eDoctor - Công ty công nghệ cung cấp giải pháp y tế, duy nhất tại Việt Nam được tham gia Google Launchpad và Facebook Start</div>
            </LayoutContainer>
        </div>
    );
};

export default TopFooter;
