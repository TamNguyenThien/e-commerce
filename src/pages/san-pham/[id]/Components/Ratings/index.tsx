import { FunctionComponent } from 'react';
import styles from './Rating.module.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Progress from 'react-progressbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface RatingProps {}

const Rating: FunctionComponent<RatingProps> = () => {
   return (
       <div className={styles.wrapper}>
           <div className={styles.form_total}>
               <div className={styles.left_content}>
                   <div className={styles.star}>
                       5
                       <Progress completed={75} />
                       10 đánh giá
                   </div>
                   <div className={styles.star}>
                       4<FontAwesomeIcon icon={faStar} />
                       <Progress completed={75} />
                       10 đánh giá
                   </div>
                   <div className={styles.star}>
                       3<FontAwesomeIcon icon={faStar} />
                       <Progress completed={75} />
                       10 đánh giá
                   </div>

                   <div className={styles.star}>
                       2<FontAwesomeIcon icon={faStar} />
                       <Progress completed={75} />
                       10 đánh giá
                   </div>
                   <div className={styles.star}>
                       1<FontAwesomeIcon icon={faStar} />
                       <Progress completed={75} />
                       10 đánh giá
                   </div>
               </div>

               <div className={styles.right_content}>
                   <div className={styles.button}></div>
               </div>
           </div>
       </div>
   );
}
export default Rating