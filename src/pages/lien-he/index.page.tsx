import LayoutContainer from '@Components/Layout/Components/Container';
import { FunctionComponent } from 'react';
import ShopCard from './Components/ShopCard';
import styles from './Contact.module.scss'
interface ContactProps {}
const Contact: FunctionComponent<ContactProps> = () => {
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

           <ShopCard className={styles.shop_item} />
           <ShopCard className={styles.shop_item} />
           <ShopCard className={styles.shop_item} />
           <ShopCard className={styles.shop_item} />
       </LayoutContainer>
   );
}
export default Contact