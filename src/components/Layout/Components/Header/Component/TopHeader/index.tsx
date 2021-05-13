import { FunctionComponent } from 'react';
import { Input } from 'reactstrap';

// components
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LayoutContainer from '@Components/Layout/Components/Container';

// Components
import styles from './TopHeader.module.scss';

const TopHeader: FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <LayoutContainer className={styles.container}>
                <a href="/gio-hang">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <Input className={styles.input} placeholder="Tìm sản phẩm" />
                <FontAwesomeIcon icon={faSearch} />
            </LayoutContainer>
        </div>
    );
};

export default TopHeader;
