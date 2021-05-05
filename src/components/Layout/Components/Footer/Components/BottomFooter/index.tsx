import { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import Image from '@Components/UI/Image';
import LayoutContainer from '@Components/Layout/Components/Container';

// Styles
import styles from './BottomFooter.module.scss';

const BottomFooter: FunctionComponent = () => {
    return (
        <div className={classnames([styles.wrapper])}>
            <LayoutContainer className={styles.main}>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>1900.6777</div>

                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Tên pháp lý: Đồng hồ Hải Triều</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>676 Lê Trọng Tấn, P. Bình Hưng Hòa, Q. Bình Tân, HCM</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Số điện thoại: +84 28 7779 7779</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Địa chỉ email: lienhe@donghohaitrieu.com</div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>HƯỚNG DẪN</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Thông Tin Liên Hệ</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Hỏi Đáp - Góp Ý</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Chính Sách Đổi Hàng</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Chính Sách Bảo Hành</div>
                </div>
                <div className={styles.col}>
                    <div className={classnames([styles.title])}>THAM KHẢO</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Thông Báo Mới</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Điều Khoản Sử Dụng</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Bảo Mật Thông Tin</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>Ngưng Hiện Quảng Cáo</div>
                    <div className={classnames([styles.address_wrapper, styles.w_285])}>
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/09/thong-bao-bo-cong-thuong.png" />
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.title}>CHỨNG NHẬN</div>
                    <div className={classnames([styles.address_wrapper, styles.w_216])}>
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2018/08/dai-ly-chinh-hang.png" />
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2018/08/dai-ly-chinh-hang.png" />
                    </div>
                </div>
            </LayoutContainer>
            <LayoutContainer className={styles.nav_bar}>
                <div className={styles.nav_item}>TÌM VỊ TRÍ SHOWROOM(19 SHOP)</div>
                <div className={styles.nav_item}>Trung tâm bảo hành</div>
                <div className={styles.nav_item}>Biên Hoà</div>
                <div className={styles.nav_item}>Cần Thờ</div>
                <div className={styles.nav_item}>Vũng Tàu</div>
                <div className={styles.nav_item}>Long Xuyên</div>
                <div className={styles.nav_item}>Rạch Giá</div>
                <div className={styles.nav_item}>Hải Phòng</div>
            </LayoutContainer>
        </div>
    );
};

export default BottomFooter;
