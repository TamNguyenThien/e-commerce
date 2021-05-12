import { FunctionComponent } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// Components
import ShopCard from './Components/ShopCard';
import LayoutContainer from '@Components/Layout/Components/Container';

// Apis
import postsApi from '@Libs/api/posts';
import { getServerSideHttp } from '@Libs/http/cms';

// styles
import styles from './Contact.module.scss';

interface ContactProps {}
const Contact: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps> & ContactProps> = ({ shopsData }) => {
    return (
        <LayoutContainer className={styles.wrapper}>
            <div className={styles.filter}>
                <a className={styles.item}>Tất Cả Showroom</a>
                <a className={styles.item}>Trung Tâm Bảo Hành</a>
                <a className={styles.item}>TPHCM</a>
                <a className={styles.item}>Biên Hoà - Bình Dương</a>
                <a className={styles.item}>Vũng Tàu</a>
                <a className={styles.item}>Long Xuyên</a>
                <a className={styles.item}>Cần Thơ</a>
            </div>

            <div className={styles.title}>HỆ THỐNG CỬA HÀNG</div>

            {!!shopsData &&
                shopsData.map((item) => <ShopCard address={item?.address} phone={item?.phone} mail={item?.mail} brand={item?.brand} key={item?.id} className={styles.shop_item} />)}
        </LayoutContainer>
    );
};
export default Contact;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const http = getServerSideHttp(ctx);
    const shopsData = await postsApi(http).find();
    return {
        props: {
            shopsData,
        },
    };
};