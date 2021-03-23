import LayoutContainer from '@Components/Layout/Components/Container';
import React, { FunctionComponent } from 'react';
import styles from './Banner.module.scss';
interface BannerProps {}
const Banner: FunctionComponent<BannerProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={'/assets/bg.png'} />
            <LayoutContainer className={styles.body}>
                <div className={styles.titles}>
                    <span className={styles.title} dangerouslySetInnerHTML={{ __html: `Welcome to Intorior` }} />
                    <h2 className={styles.sub_title} dangerouslySetInnerHTML={{ __html: `Modern Interior & Design` }} />
                </div>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <img src="/Assets/icon1.png" />
                        <span className={styles.title}>Free online consultation</span>
                        <span className={styles.description}>Talk to our designers online and start planning your interiors from the comfort of your home.</span>
                    </div>
                    <div className={styles.block}>
                        <img src="/Assets/icon2.png" />
                        <span className={styles.title}>Free online consultation</span>
                        <span className={styles.description}>Talk to our designers online and start planning your interiors from the comfort of your home.</span>
                    </div>
                    <div className={styles.block}>
                        <img src="/Assets/icon3.png" />
                        <span className={styles.title}>Free online consultation</span>
                        <span className={styles.description}>Talk to our designers online and start planning your interiors from the comfort of your home.</span>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};
export default Banner;
