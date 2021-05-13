import { FunctionComponent } from 'react';
import LayoutContainer from '@Components/Layout/Components/Container';
import { FormGroup, Label, Input } from 'reactstrap';

// styles
import styles from './cart.module.scss';

interface CartProps {}
const Cart: FunctionComponent<CartProps> = () => {
    return (
        <LayoutContainer className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>THANH TOÁN</div>
                <div className={styles.breadcrumb}>Trang Chủ / Thanh Toán</div>
            </div>

            <form className={styles.content}>
                <div className={styles.info_customer}>
                    <h3 className={styles.title}>ĐỊA CHỈ NHẬN HÀNG</h3>
                    <FormGroup className={styles.full_name}>
                        <div className={styles.last_name}>
                            <span>Tên</span>
                            <Input type="text" />
                        </div>
                        <div className={styles.first_name}>
                            <span>Họ</span>
                            <Input type="text" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <span>Địa chỉ</span>
                        <Input type="text" placeholder="Đia chỉ" />
                    </FormGroup>
                    <FormGroup>
                        <span>Tỉnh/ Thành phố</span>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <span>Số điện thoại</span>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <span>Địa chỉ email</span>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup className={styles.more_info}>
                        <h3 className={styles.title}>THÔNG TIN THÊM</h3>
                        <span className={styles.note}>Ghi chú đơn hàng</span>
                        <Input type="textarea" cols={3} placeholder="Ghi chú về đơn hàng" />
                    </FormGroup>
                </div>
                <div className={styles.info_order}>
                    <h3 className={styles.title}>ĐƠN HÀNG CỦA BẠN</h3>
                    <div className={styles.info_product}>
                        <div className={styles.item}>
                            <div className={styles.left_item}>SẢN PHẨM</div>
                            <div>SUBTOTAL</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.left_item}>
                                Orient FAB00004T9 - Nam - Automatic (Tự Động) - Dây Kim Loại - Mặt Số 37mm <strong>× 1</strong>
                            </div>
                            <div>3.300.000 đ</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.left_item}>Tạm tính</div>
                            <div>3.300.000 đ</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.left_item}>Tổng cộng</div>
                            <div>3.300.000 đ</div>
                        </div>
                        <div className={styles.item}>
                            <Label check>
                                <Input type="radio" name="radio1" /> Trả Tiền Mặt Khi Nhận Hàng
                            </Label>
                        </div>
                        <div className={styles.item}>
                            <Label check>
                                <Input type="radio" name="radio1" /> Chuyển Khoản Ngân Hàng
                            </Label>
                        </div>
                        <div className={styles.item}>
                            <Label check>
                                <Input type="radio" name="radio1" /> Thanh Toán Trả Góp
                            </Label>
                        </div>
                        <div className={styles.item}>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng của bạn</div>

                        <div className={styles.btn_order}>
                            <a>ĐẶT HÀNG</a>
                        </div>
                    </div>
                </div>
            </form>
        </LayoutContainer>
    );
};
export default Cart;
