import Image from '@Components/UI/Image';
import { FunctionComponent } from 'react';
import styles from './BlockItem.module.scss';

interface BlockItemProps {}
const BlockItem: FunctionComponent<BlockItemProps> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_content}>
                <div className={styles.tag}>What we do?</div>
                <div className={styles.title}>Full Package of design service</div>
                <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing.</div>
                <div className={styles.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets .
                </div>
            </div>
            <div className={styles.right_content}>
                <Image className={styles.banner} src="/assets/block_icon.png" />
            </div>
        </div>
    );
};

export default BlockItem;
