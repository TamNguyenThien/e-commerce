import { FunctionComponent } from 'react';
import styles from './ShopCard.module.scss'
import classnames from 'classnames'
import Image from '@Components/UI/Image';
interface ShopCardProps {
  className?: string
  address?: string,
  phone?: string,
  mail?: string,
  brand?: string
}
const ShopCard: FunctionComponent<ShopCardProps> = ({ className, address, brand, phone, mail }) => {
   return (
       <div className={classnames([styles.wrapper, className])}>
           <div className={styles.banner}>
               <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2014/05/Chi-Nhanh-Au-Co.jpg" />
           </div>
           <div className={styles.info}>
               <div className={styles.item}>
                   <strong>Chi Nhánh:</strong>{address}<a className={styles.map}>(Xem Bản Đồ)</a>
               </div>
               <div className={styles.item}>
                   <strong>ĐT:</strong> {phone}
               </div>
               <div className={styles.item}>
                   <strong>Mail:</strong> {mail}
               </div>
               <div className={styles.item}>
                   <strong>Bán Các Hãng:</strong> {brand}
               </div>
           </div>
       </div>
   );
}

ShopCard.defaultProps = {
    address: '160 Âu Cơ, P.9, Q.Tân Bình – TPHCM',
    phone: '0825199646',
    mail: 'Nguyentam2112015@gmail.com ',
    brand: 'Citizen, Casio, TiTan, Skagen, Seiko, OP, Orient, Adriatica, Police, Timex, Daniel Wellington',
};
export default ShopCard