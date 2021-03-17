import { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import LayoutContainer from '@Components/Layout/Components/Container';

// Styles
import styles from './MiddleFooter.module.scss';

// Config

const middleFooter = {
    eDoctor: [
        {
            title: 'Về chúng tôi',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Liên hệ',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Blog',
            link: '',
            target: '_self',
            isComing: true,
        },
    ],
    service: [
        {
            title: 'Đặt câu hỏi miễn phí',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Đặt khám tổng quát',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Xem kết quả xét nghiệm',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Mua thuốc trực tuyến',
            rel: 'noreferrer',
            link: '/',
            target: '_blank',
        },
        {
            title: 'Chat với Bác sĩ',
            link: 'https://dl.edoctor.io/taiapp',
            target: '_blank',
            isComing: false,
        },
    ],
    info: [
        {
            title: 'Tra cứu loại bệnh',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Tra cứu thuốc',
            link: '',
            target: '_self',
            isComing: true,
        },
        {
            title: 'Tìm phòng khám',
            target: '_self',
            link: '/',
            isComing: false,
        },
        {
            title: 'Tìm kiếm Bác sĩ',
            link: '/',
            target: '_self',
            isComing: false,
        },
    ],
    partner: [
        {
            title: 'Dành cho Bác sĩ',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Cộng tác viên',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Doanh nghiệp',
            target: '_self',
            link: '/',
            isComing: false,
        },
    ],
    other: [
        {
            title: 'Chính sách bảo mật',
            target: '_self',
            link: '/',
            isComing: false,
        },
        {
            title: 'Điều khoản sử dụng',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Quy định về sử dụng sản phẩm',
            link: '/',
            target: '_self',
            isComing: false,
        },
        {
            title: 'Thanh toán tự động Autopay',
            target: '_self',
            link: '/',
            isComing: false,
        },
        {
            title: 'Quy chế hoạt động',
            target: '_self',
            link: '/',
            isComing: false,
        },
        {
            title: 'Tin tức & Báo chí',
            target: '_self',
            link: '/',
            isComing: false,
        },
    ],
};

interface MENU {
    rel?: string;
    link: string;
    title: string;
    target: string;
    isComing?: boolean;
}

const MiddleFooter: FunctionComponent = () => {
    const renderLink = (menu: Array<MENU>) => {
        return menu.map((item, index) => {
            const rowClassName = classnames([styles.row, { [styles.in_coming]: item.isComing }]);
            return (
                <a href={item.link} target={item.target} rel={item.rel} key={`footer-link-${index}`} className={rowClassName}>
                    {item.title}
                </a>
            );
        });
    };

    return (
        <div className={classnames([styles.wrapper])}>
            <LayoutContainer className={styles.main}>
                <div>
                    <img className={styles.logo} src={'/assets/white_logo.png'} width={'92px'} height={'30px'} />
                </div>

                <div className={styles.col}>
                    <div>
                        <img className={styles.logo} src={'/assets/white_logo.png'} width={'92px'} height={'30px'} />
                    </div>

                    <div>
                        <div className={styles.title}>EDOCTOR</div>
                    </div>

                    {renderLink(middleFooter.eDoctor)}
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>DỊCH VỤ</div>
                    {renderLink(middleFooter.service)}
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>THÔNG TIN</div>
                    {renderLink(middleFooter.info)}
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>CHO ĐỐI TÁC</div>
                    {renderLink(middleFooter.partner)}
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>KHÁC</div>
                    {renderLink(middleFooter.other)}
                </div>
                <div className={styles.col}>
                    <div className={styles.connect}>KẾT NỐI VỚI CHÚNG TÔI</div>
                    <div className={styles.social_network}>
                        <a href="https://www.facebook.com/edoctorvn" className={styles.icon_item}>
                            <img src={'/assets/footer/fb_app.png'} width={'36px'} height={'36px'} />
                        </a>
                        <a href="https://www.youtube.com/c/eDoctorOfficial" className={styles.icon_item}>
                            <img src={'/assets/footer/youtube.png'} width={'36px'} height={'36px'} />
                        </a>
                    </div>
                    <div className={styles.download_title}>TẢI ỨNG DỤNG</div>
                    <div className={styles.download_app}>
                        <a href={'https://dl.edoctor.io/taiapp'} className={styles.icon_download}>
                            <img src={'/assets/downloadApp/app_store_black.png'} width={'108px'} height={'32px'} />
                        </a>

                        <a href={'https://dl.edoctor.io/taiapp'} className={styles.icon_download}>
                            <img src={'/assets/downloadApp/google_play_black.png'} width={'108px'} height={'32px'} />
                        </a>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
};

export default MiddleFooter;
