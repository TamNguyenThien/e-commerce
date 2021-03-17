import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Dropdown } from 'reactstrap';
// Components

// Utils
import lodashFind from 'lodash/find';

// Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../HeaderNavbar.module.scss';

const HEADER_MENU = [
    {
        type: 'dropdown',
        name: 'Thông tin',
        description: 'Cộng đồng, tin tức sức khoẻ',
        child: [
            {
                title: 'CỘNG ĐỒNG',
                subTitle: 'Cộng đồng hỏi đáp sức khỏe do đội ngũ Bác sĩ chuyên môn tư vấn.',
                image: '/assets/homeNavbar/community.png',
                link: '/hoi-dap',
            },
            {
                title: 'TIN TỨC SỨC KHỎE',
                subTitle: 'Khám phá bài viết với các chủ đề đa dạng, cập nhật thông tin y tế mới nhất.',
                image: '/assets/homeNavbar/news_health.png',
                link: '/suc-khoe',
            },
        ],
    },
    // {
    //     type: 'dropdown',
    //     name: 'Dịch vụ',
    //     description: 'Danh sách các dịch vụ',
    //     child: [
    //         {
    //             title: 'KHÁM TỔNG QUÁT',
    //             subTitle: 'Khám sức khỏe tổng quát và tầm soát các bệnh lý như ung thư, tiểu đường, gout, tim mạch, đột quỵ, v.v...',
    //             image: '/assets/homeNavbar/community.png',
    //             link: '/kham-tong-quat.html',
    //         },
    //         {
    //             title: 'CHĂM SÓC TẬN NƠI',
    //             subTitle: 'Chăm sóc cho người bệnh và người cao tuổi tại nhà hoặc tại bệnh viện.',
    //             image: '/assets/homeNavbar/news_health.png',
    //             link: '/cham-soc-tan-noi.html',
    //         },
    //         {
    //             title: 'LẤY MẪU TẠI NHÀ',
    //             subTitle: 'Không cần chờ đợi, không cần nhịn ăn vì đã có Điều dưỡng eDoctor đến lấy mẫu xét nghiệm tại nhà giúp bạn.',
    //             image: '/assets/homeNavbar/community.png',
    //             link: '/xet-nghiem-tai-nha.html',
    //         },
    //         {
    //             title: 'KHÁM DOANH NGHIỆP',
    //             subTitle: 'eDoctor vinh dự được hàng trăm doanh nghiệp lựa chọn làm dịch vụ khám sức khỏe định kỳ cho nhân viên.',
    //             image: '/assets/homeNavbar/news_health.png',
    //             link: '/doanh-nghiep.html',
    //         },
    //     ],
    // },
    {
        type: 'link',
        name: 'Dịch vụ',
        description: 'Danh sách các dịch vụ',
        link: '/dich-vu',
    },
    {
        type: 'link',
        name: 'Hỏi Bác sĩ',
        description: 'Tư vấn Bác sĩ trực tuyến',
        link: '/hoi-dap',
    },
    {
        type: 'link',
        name: 'Nhà thuốc',
        description: 'Mua thuốc trực tuyến',
        link: '/',
    },
    {
        type: 'dropdown',
        name: 'Dành cho đối tác',
        description: 'Bác sĩ, CTV, phòng khám',
        child: [
            {
                title: 'Bác sĩ',
                subTitle: 'Giúp hàng ngàn người dùng với những vấn đề sức khỏe không được giải đáp.',
                image: '/assets/homeNavbar/doctor.png',
                link: '/bac-si.html',
            },
            {
                title: 'ĐIỀU DƯỠNG (CTV)',
                subTitle: 'Hỗ trợ lấy mẫu xét nghiệm tại nhà.',
                image: '/assets/homeNavbar/nurse.png',
                link: '/cong-tac-vien.html',
            },
            {
                title: 'PHÒNG KHÁM',
                subTitle: 'Cung cấp giải pháp công nghệ giúp các phòng khám hoạt động hiệu quả hơn nữa',
                image: '/assets/homeNavbar/clinic.png',
                link: '/phong-kham',
            },
        ],
    },
];

// const PARTNERS = ;

interface DesktopNavbarProps {}

const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = () => {
    const renderItemMenu = (menu: Array<{ title: string; subTitle: string; image: string }>) => {
        return menu.map((item: any, index) => (
            <a href={item.link} key={`dropdown-menu-item-${index}`} className={styles.dropdown_menu_item}>
                <img src={item.image} className={styles.image} width={'48px'} height={'48px'} />
                <div className={styles.item_content}>
                    <span className={styles.item_title}>{item.title}</span>
                    <span className={styles.item_sub_title}>{item.subTitle}</span>
                </div>
                {/* <FontAwesomeIcon className={styles.item_icon} icon={faAngleRight} /> */}
            </a>
        ));
    };

    const renderMenu = () => {
        return HEADER_MENU.map((menu: any, index) => {
            if (menu.type === 'dropdown') {
                return (
                    <Dropdown key={`dropdown-item-${index}`} className={styles.menu_item} itemProps={renderItemMenu(menu.child)} dropdownMenuClassName={styles.dropdown_menu}>
                        <div className={styles.title}>
                            {menu.name}
                            {/* <FontAwesomeIcon className={styles.icon} icon={faCaretDown} /> */}
                        </div>
                        <span className={styles.sub_title}>{menu.description}</span>
                    </Dropdown>
                );
            }

            return (
                <a key={`link-item-${index}`} href={menu.link} className={styles.menu_item}>
                    <div className={styles.title}>{menu.name}</div>
                    <span className={styles.sub_title}>{menu.description}</span>
                </a>
            );
        });
    };

    const iconSearchClass = classnames([styles.icon_search]);

    return (
        <>
            <div className={styles.left}>{renderMenu()}</div>
            <div className={styles.right}>
                <a href="/tra-cuu">
                    <img className={iconSearchClass} src="/assets/navbar/menu/search.svg" />
                </a>

                <div className={styles.authenticate_dropdown}>
                    <div className={styles.authenticate}>
                        <div className={styles.btn_authenticate}>Đăng ký / Đăng nhập</div>
                        <span className={styles.help_text}>Đăng nhập để xem kết quả</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesktopNavbar;
