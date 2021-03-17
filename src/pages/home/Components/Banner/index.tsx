import React, { FunctionComponent } from 'react';
import styles from './Banner.module.scss';
interface BannerProps {}
const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={'/assets/banner1.jpeg'} />
        </div>
    );
};
export default Banner;
