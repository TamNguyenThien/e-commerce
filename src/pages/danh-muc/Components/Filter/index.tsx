import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Input } from 'reactstrap';

// styles
import styles from './Filter.module.scss';

interface FilterProps {
    title?: string;
    className?: string;
    items?: Array<any>;
}
const Filter: FunctionComponent<FilterProps> = ({ className, title, items }) => {
    return (
        <div className={classnames([className, styles.wrapper])}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Input type="checkbox" /> Dây Da
                </div>

                <div className={styles.item}>
                    <Input type="checkbox" /> Dây Kim Loại
                </div>

                <div className={styles.item}>
                    <Input type="checkbox" /> Dây Lưới
                </div>
                <div className={styles.item}>
                    <Input type="checkbox" /> Dây vải
                </div>
                <div className={styles.item}>
                    <Input type="checkbox" /> Dây Da Cá Sấu
                </div>
                <div className={styles.item}>
                    <Input type="checkbox" /> Dây Nhựa
                </div>
                <div className={styles.item}>
                    <Input type="checkbox" /> nam
                </div>
                <div className={styles.item}>
                    <Input type="checkbox" /> nam
                </div>
            </div>
        </div>
    );
};

Filter.defaultProps = {
    title: 'THƯƠNG HIỆU',
    items: ['Nam', 'Nữ', 'Nam', 'Nữ'],
};
export default Filter;
