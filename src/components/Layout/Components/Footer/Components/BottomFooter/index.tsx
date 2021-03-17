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
                    <div className={classnames([styles.title, styles.mt_12])}>
                        <span className={styles.bold}>LIÊN HỆ</span>
                    </div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>
                        <div className={styles.name}>Trụ sở Hồ Chí Minh</div>
                        Tầng 8, Toà nhà PVFCCO, số 27 Đinh Bộ Lĩnh, Phường 24, Q.Bình Thạnh.
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title, styles.mt_12])}>
                        <a className={styles.mail} href="mailto:hotro@edoctor.vn">
                            Email: hotro@edoctor.vn
                        </a>
                    </div>
                    <div className={classnames([styles.address_wrapper, styles.w_218])}>
                        <div className={styles.name}>Chi nhánh TP. Hà Nội</div>
                        Lầu 2, Toà A3 Ecolife, số 58 Tố Hữu, Nam Từ Liêm.
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title, styles.mt_11])}>
                        <span className={styles.hotline}>
                            Hotline:{' '}
                            <span className={styles.tel}>
                                <a className={styles.phone_number} href="tel:19006115">
                                    1900 6115
                                </a>{' '}
                                -{' '}
                                <a className={styles.phone_number} href="tel:0899909115">
                                    0899909115
                                </a>
                            </span>
                        </span>
                    </div>
                    <div className={classnames([styles.address_wrapper])}>
                        <div className={styles.name}>Trụ sở Hồ Chí Minh</div>
                        Tầng 8, Toà nhà PVFCCO, số 27 Đinh Bộ Lĩnh, Phường 24, Q.Bình Thạnh.
                    </div>
                    <div className={classnames([styles.address_wrapper])}>
                        <div className={styles.name}>Chi nhánh TP. Hà Nội</div>
                        Lầu 2, Toà A3 Ecolife, số 58 Tố Hữu, Nam Từ Liêm.
                    </div>
                    <div className={classnames([styles.address_wrapper, styles.w_216])}>
                        <div className={styles.name}>Chi nhánh TP. Cần Thơ</div>
                        368B Nguyễn Văn Cừ nối dài, P. An Khánh, Q. Ninh Kiều.
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>
                        <span className={styles.certificated_text}>GPDKKD số 0106462477 do Sở KH và ĐT TP.HCM cấp ngày 21/02/2014</span>
                    </div>
                    <span className={styles.certificated_icon} />
                </div>
            </LayoutContainer>
        </div>
    );
};

export default BottomFooter;
