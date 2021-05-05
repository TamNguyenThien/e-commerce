import { FunctionComponent } from "react";

// Components
import Image from "@Components/UI/Image";
import LayoutContainer from "@Components/Layout/Components/Container";

// styles
import styles from './Category.module.scss'
const Category: FunctionComponent = () => {
  return (
      <div className={styles.body}>
          <LayoutContainer className={styles.wrapper}>
              <div className={styles.top_cate}>
                  <Image className={styles.left_banner} src="https://cdn3.dhht.vn/wp-content/uploads/2021/02/banner-trang-chu-saga-2021.jpg" />
                  <div className={styles.right_banner}>
                      <div className={styles.cate_item}>
                          <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nam.png" />
                      </div>
                      <div className={styles.cate_item}>
                          <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nu.png" />
                      </div>
                      <div className={styles.cate_item}>
                          <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-doi.png" />
                      </div>
                      <div className={styles.cate_item}>
                          <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-tre-em.png" />
                      </div>
                  </div>
              </div>
              <div className={styles.bottom_cate}>
                  <Image className={styles.item} src="https://cdn3.dhht.vn/wp-content/uploads/2021/03/bst-dong-ho-nam-hot.jpg" />
                  <Image className={styles.item} src="https://cdn3.dhht.vn/wp-content/uploads/2021/03/bst-dong-ho-nam-hot.jpg" />
                  <Image className={styles.item} src="https://cdn3.dhht.vn/wp-content/uploads/2021/03/bst-dong-ho-nam-hot.jpg" />
              </div>
          </LayoutContainer>
      </div>
  );
}

export default Category