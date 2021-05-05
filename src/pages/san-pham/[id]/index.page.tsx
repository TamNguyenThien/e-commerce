import { FunctionComponent, useState } from 'react';
import Rater from 'react-rater';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem } from 'reactstrap';

// components
import Image from '@Components/UI/Image';
import ListClock from '@Pages/home/Components/ListClock';
import LayoutContainer from '@Components/Layout/Components/Container';

// styles
import styles from './ClockDetail.module.scss';


interface ClockDetailProps {}
const ClockDetail: FunctionComponent<ClockDetailProps> = () => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
      if (activeTab !== tab) setActiveTab(tab);
  };
    return (
        <LayoutContainer className={styles.wrapper}>
            <div className={styles.wrapper_title}>
                <div className={styles.title}>CASIO AE-1200WHD-1AVDF – NAM – KÍNH NHỰA – QUARTZ (PIN) – DÂY KIM LOẠI</div>
            </div>
            <div className={styles.summary}>
                <div className={styles.left_summary}>
                    <div className={styles.slider}>
                        <Image className={styles.image} src={'https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-1-699x699.jpg'} />
                    </div>
                </div>
                <div className={styles.middle_summary}>
                    <div className={styles.title}>THÔNG TIN SẢN PHẨM</div>
                    <Rater total={5} rating={4} interactive={false} />
                    <div className={styles.description}>
                        Mã Số Sản Phẩm: <strong>AE-1200WHD-1AVDF</strong> <div className={styles.price}>1.246.000 ₫</div> Đồng hồ nam Casio AE1200WHD có mặt đồng hồ vuông to với phong cách thể thao,
                        mặt số điện tử với những tính năng hiện đại tiện dụng, kết hợp với dây đeo bằng kim loại đem lại vẻ mạnh mẽ cá tính dành cho phái nam.
                    </div>
                    <div className={styles.media}>
                        <Image src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/reviews.gif" />
                        <Image src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/broll.gif" />
                        <Image src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/hdsd.gif" />
                    </div>
                    <div className={styles.showroom}>
                        <a>XEM SHOWROOM CÒN HÀNG</a>
                    </div>

                    <div className={styles.add_cart}>
                        <a>THÊM VÀO GIỎ</a>
                    </div>
                    <div className={styles.note}>
                        Có thanh toán: <strong>Trả Góp</strong> khi mua Online (Qua thẻ tín dụng) <br /> Gọi đặt mua: <strong>1900.6777</strong> (7:30-21:30)
                    </div>
                </div>
                <div className={styles.right_summary}>
                    <div className={styles.brand}>
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Casio-Logo.png" />
                    </div>
                    <div className={styles.hight_light}>
                        <div className={styles.item}>
                            <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/bao-hanh-5-nam1.png" />
                            <div>Hoàn Lại Tiền Gấp 10 Lần Nếu Phát Hiện Hàng Giả - Hàng Nhái.</div>
                        </div>
                        <div className={styles.item}>
                            <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/chung-nhan1.png" />
                            <div>Tăng Thêm Thời Gian Bảo Hành Lên Đến 5 Năm - Xem Thêm</div>
                        </div>
                        <div className={styles.item}>
                            <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/chung-nhan1.png" />
                            <div>Sai Kích Cỡ? Không Ưng Ý? Đổi Hàng Trong 7 Ngày - Xem Thêm</div>
                        </div>

                        <div className={styles.item}>
                            <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/1-doi-12.png" />
                            <div>Thay Pin Miễn Phí Suốt Đời - Không Còn Lo Hết Pin Nữa.</div>
                        </div>

                        <div className={styles.item}>
                            <Image className={styles.image} src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/chung-nhan1.png" />
                            <div>Thay Pin Miễn Phí Suốt Đời - Không Còn Lo Hết Pin Nữa.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper_tabs}>
                <Nav tabs className={styles.tabs}>
                    <NavItem
                        className={classnames([styles.tab_item, { [styles.active]: activeTab === '1' }])}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        Tab1
                    </NavItem>
                    <NavItem
                        className={classnames([styles.tab_item, { [styles.active]: activeTab === '2' }])}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        More Tabs
                    </NavItem>
                </Nav>
                <TabContent className={styles.tab_content} activeTab={activeTab}>
                    <TabPane className={styles.item} tabId="1">
                        <div>
                            Chế Độ Bảo Hành Tất cả các đồng hồ khi bán ra đều kèm theo 2 phiếu bảo hành: 1 Phiếu Bảo Hành (hoặc Thẻ Bảo Hành/Sổ Bảo Hành) của hãng có giá trị bảo hành Quốc tế (Thời
                            gian bảo hành tùy theo quy định của từng hãng). 1 Phiếu Bảo Hành của Hải Triều (Sử dụng để được thay pin miễn phí vĩnh viễn & Hưởng chế độ bảo hành tăng thêm từ 1-4 năm của
                            Hải Triều). Ví dụ: Đồng Hồ Citizen có chế độ bảo hành chính hãng: máy = 12 tháng, Pin = 12 tháng. Khi mua tại Hải Triều, Khách hàng sẽ được tặng thêm thời gian bảo hành từ
                            4 năm về máy. Pin = Vĩnh Viễn. Tổng cộng: Khi mua tại Hải Triều, đồng hồ Citizen sẽ được bảo hành máy = 05 năm, Pin = Vĩnh Viễn. Lưu ý: Đối với sản phẩm còn trong thời gian
                            bảo hành Quốc Tế: Quý khách có thể đem tới Hải Triều hoặc bất kỳ nhà trung tâm bảo hành nào của hãng được ghi trên phiếu để yêu cầu được kiểm tra đồng hồ. Đối với sản phẩm
                            hết thời gian bảo hành Quốc Tế nhưng vẫn trong thời gian bảo hành tại Hải Triều: Quý khách đem đồng hồ kèm Phiếu Bảo Hành của Hải Triều tới bất kỳ chi nhánh nào của Hải
                            Triều để được hướng dẫn và kiểm tra đồng hồ. Điều Kiện Được Bảo Hành Bảo hành chỉ có giá trị khi đồng hồ có Phiếu bảo hành của hãng & Phiếu bảo hành của Hải Triều đi kèm,
                            điền chính xác, đầy đủ các thông tin. Phiếu bảo hành phải còn nguyên vẹn, không rách, chấp vá, hoen ố, mờ nhạt. Còn trong thời gian bảo hành. Thời gian bảo hành được tính
                            từ ngày mua có ghi trên Phiếu Bảo Hành. Chỉ bảo hành thay thế mới cho những linh kiện, phụ tùng bị hỏng – không thay thế bằng một chiếc đồng hồ khác. Điều Kiện Không Được
                            Bảo Hành Đồng hồ không có Phiếu bảo hành của hãng và Phiếu bảo hành của Hải Triều đi kèm. Các loại dây đeo, khoá, vỏ, màu xi, mặt số, mặt kiếng bị hỏng hóc, vỡ do sử dụng
                            không đúng, tai nạn, lão hóa tự nhiên, va đập, … trong quá trình sử dụng. Hỏng hóc do hậu quả gián tiếp của việc sử dụng sai hướng dẫn của hãng có kèm theo đồng hồ. Trầy
                            xước về dây hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong quá trình sử dụng. Tự ý thay đổi máy móc bên trong, mở ra can thiệp sửa chữa trong thời gian còn bảo hành – Tại
                            những nơi không phải là trung tâm của hãng Chế Độ Bảo Hành RED GUARANTEE Tăng thêm 1-2 năm bảo hành tại Hải Triều ngoài chế độ bảo hành Quốc Tế của hãng để có tổng thời
                            gian là 4 năm. Ưu tiên bảo hành – Đồng hồ sẽ được xếp vào danh sách ưu tiên bảo hành để nhanh chóng quay lại với Quý khách. Giao nhận đồng hồ bảo hành ngay tại nhà Quý
                            khách.
                        </div>
                    </TabPane>
                    <TabPane className={styles.item} tabId="2">
                        <div>
                            Cập nhật tình trạng đồng hồ qua điện thoại tới Quý khách. Quý khách được tư vấn, cập nhật tình trạng đồng hồ trong quá trình đồng hồ được bảo hành. 4 năm đánh bóng đồng hồ
                            miễn phí. Chính Sách Đổi Hàng Trong vòng 7 ngày kể từ ngày mua hàng từ Đồng Hồ Hải Triều, Quý khách có thể yêu cầu đổi hàng hoàn toàn miễn phí. Thời hạn 7 ngày được tính
                            theo dấu bưu điện khi Quý khách gửi sản phẩm về cho chúng tôi hoặc thời gian chúng tôi tiếp nhận yêu cầu trực tiếp (tại cửa hàng) của Quý khách. Yêu cầu đổi hàng cần được
                            thực hiện trong vòng 7 ngày kể từ ngày Quý khách nhận được hàng. Sản phẩm không có dấu hiệu đã qua sử dụng (còn đầy đủ keo dán bảo vệ chống trầy xước mặt đồng hồ, nắp đáy,
                            dây..) Sản phẩm không bị dây bẩn, trầy xước, hư hỏng, dính hoá chất hoặc có dấu hiệu cạy mở. Các bộ phận, linh kiện, phụ kiện, tài liệu hướng dẫn sử dụng, tài liệu kỹ
                            thuật, quà tặng kèm theo (nếu có), … Hộp đựng, bao bì đóng gói sản phẩm còn nguyên vẹn, không bị móp, rách, ố vàng, … Chỉ chấp nhận đổi 1 lần duy nhất tính từ ngày mua sản
                            phẩm. Hướng Dẫn Mua Hàng Do đặc thù mặt hàng đồng hồ cao cấp nên chúng tôi khuyến khích Quý khách tới tham quan và mua sắm tại hệ thống đại lý cửa hàng của Đồng Hồ Hải
                            Triều. Hệ Thống Chi Nhánh Trường hợp quý khách ở xa (khu vực không có hệ thống cửa hàng của Hải Triều), không có thời gian tới cửa hàng, hay theo yêu cầu của quý khách - Để
                            đảm bảo sự thuận tiện nhất cho quá trình mua hàng của Quý khách, Đồng Hồ Hải Triều sẽ áp dụng hình thức giao hàng và thu tiền tận nhà (COD) (Quý khách chỉ phải trả tiền khi
                            nhận được hàng) Gọi Ngay: 1900.6777
                        </div>
                    </TabPane>
                </TabContent>
            </div>

            <ListClock title="SẢN PHẨM LIÊN QUAN" />
        </LayoutContainer>
    );
};
export default ClockDetail;
