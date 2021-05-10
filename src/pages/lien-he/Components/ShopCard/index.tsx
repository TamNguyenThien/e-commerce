import { FunctionComponent } from 'react';
import styles from './ShopCard.module.scss'
import classnames from 'classnames'
import Image from '@Components/UI/Image';
interface ShopCardProps {
  className?: string
}
const ShopCard: FunctionComponent<ShopCardProps> = ({ className }) => {
   return (
       <div className={classnames([styles.wrapper, className])}>
           <div className={styles.banner}>
               <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2014/05/Chi-Nhanh-Au-Co.jpg" />
           </div>
           <div className={styles.info}>
               <div className={styles.item}>
                   <strong>Chi Nhánh:</strong>160 Âu Cơ, P.9, Q.Tân Bình – TPHCM <a className={styles.map}>(Xem Bản Đồ)</a>
               </div>
               <div className={styles.item}>
                   <strong>ĐT:</strong> 1900.6777
               </div>
               <div className={styles.item}>
                   <strong>Mail:</strong> lienhe@donghocuatoi.com
               </div>
               <div className={styles.item}>
                   <strong>Bán Các Hãng:</strong> Citizen, Casio, TiTan, Skagen, Seiko, OP, Orient, Adriatica, Police, Timex, Daniel Wellington
               </div>
           </div>
       </div>
   );
}
export default ShopCard