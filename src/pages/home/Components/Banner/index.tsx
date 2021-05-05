import React, { FunctionComponent } from 'react';
import Page from '@Components/UI/Page';
import styles from './Banner.module.scss';
interface BannerProps {}
const Banner: FunctionComponent<BannerProps> = (props) => {

    return (
        <Page>
            <div className={styles.wrapper}>
                <img className={styles.img} src={'https://cdn3.dhht.vn/wp-content/uploads/2021/03/banner-trang-chu-doxa-2021.jpg'} />
            </div>
        </Page>
    );
};
export default Banner;
