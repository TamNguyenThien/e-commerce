import { FunctionComponent } from "react";

// Components
import Image from "@Components/UI/Image";

// Styles
import styles from './Menu.module.scss'

const Menu: FunctionComponent = () => {
  return (
      <div className={styles.wrapper}>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_mat-xa-cu.png" />
          </div>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_phien-ban-gioi-han.png" />
          </div>

          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vang-18k.png" />
          </div>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_kim-cuong.png" />
          </div>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_mat-xa-cu.png" />
          </div>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_phien-ban-gioi-han.png" />
          </div>

          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vang-18k.png" />
          </div>
          <div className={styles.menu_item}>
              <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_kim-cuong.png" />
          </div>
      </div>
  );
}

export default Menu