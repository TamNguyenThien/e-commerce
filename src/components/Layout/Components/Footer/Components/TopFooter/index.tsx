import { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import Image from '@Components/UI/Image';
import LayoutContainer from '@Components/Layout/Components/Container';

// Styles
import styles from './TopFooter.module.scss';

const TopFooter: FunctionComponent = () => {
    return (
        <div className={classnames([styles.wrapper])}>
            <LayoutContainer className={styles.main}>
                <h3 className={styles.title}>Copyright by Đồng Hồ Hải Triều®</h3>
                <div className={styles.list_payment}>
                    <div className={styles.payment_item}>
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2015/02/hinh-thuc-thanh-toan.png" />
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

export default TopFooter;
