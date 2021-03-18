import LayoutContainer from '@Components/Layout/Components/Container';
import React, { FunctionComponent } from 'react';

import styles from './Sliders.module.scss';

interface SlidersProps {}
const Sliders: FunctionComponent<SlidersProps> = () => {
    return (
        <LayoutContainer className={styles.slider}>
            <div>123</div>
        </LayoutContainer>
    );
};

export default Sliders;
