import React, { FunctionComponent } from 'react';

// Components
import Image from '@Components/UI/Image';
import LayoutContainer from '@Components/Layout/Components/Container';

// styles
import styles from './BottomHeader.module.scss';

interface NavbarProps {}
const BottomHeader: FunctionComponent<NavbarProps> = () => {
    return (
        <div className={styles.bottom_header}>
            <LayoutContainer className={styles.container}>
                <a href="/" className={styles.header_name}>
                    <Image className={styles.logo} src={'/assets/logo_icon.png'} />
                </a>
                <div className={styles.nav_items}>
                    <a href="/danh-muc/dong-ho-deo-tay-chinh-hang" className={styles.nav_item}>
                        THƯƠNG HIỆU
                    </a>
                    <a href="/danh-muc/dong-ho-nam" className={styles.nav_item}>
                        NAM
                    </a>
                    <a href="/danh-muc/dong-ho-nu" className={styles.nav_item}>
                        NỮ
                    </a>
                    <a href="/danh-muc/dong-ho-cap-doi" className={styles.nav_item}>
                        CẶP ĐÔI
                    </a>
                    <a href="/dich-vu" className={styles.nav_item}>
                        DỊCH VỤ
                    </a>
                    <a href="/lien-he" className={styles.nav_item}>
                        LIÊN HỆ
                    </a>
                </div>
            </LayoutContainer>
        </div>
    );
};
export default BottomHeader;
