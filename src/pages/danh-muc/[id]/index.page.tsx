import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// Components
import { DropdownItem } from 'reactstrap';
import Image from '@Components/UI/Image';
import Dropdown from '@Components/UI/Dropdown';
import styles from './ListProduct.module.scss';
import ClockCard from '@Components/UI/ClockCard';
import ListFilter from '../Components/ListFilter';
import LayoutContainer from '@Components/Layout/Components/Container';

// utils
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ListProps {}

const src = [
    ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
    'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
    ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
];
const SORT_OPTIONS = {
    new: { label: 'Mới nhất', value: 'new' },
    default: { label: 'Mặc định', value: 'default' },
    rate: { label: 'Theo đánh giá', value: 'rate' },
    hot: { label: 'Phổ biến', value: 'hot' },
};

const List: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps> & ListProps> = () => {

    const [optionSort, setOptionSort] = useState(SORT_OPTIONS['default']);

    const [isModeList, setIsModeList] = useState(false);

    const renderItemMenu = () => {
        return (
            <div className={styles.menu_items}>
                <DropdownItem value="default" className={styles.dropdown_item} onClick={() => setOptionSort(SORT_OPTIONS['default'])}>
                    {SORT_OPTIONS['default'].label}
                </DropdownItem>
                <DropdownItem value="new" className={styles.dropdown_item} onClick={() => setOptionSort(SORT_OPTIONS['new'])}>
                    {SORT_OPTIONS['new'].label}
                </DropdownItem>
                <DropdownItem value="new" className={styles.dropdown_item} onClick={() => setOptionSort(SORT_OPTIONS['hot'])}>
                    {SORT_OPTIONS['hot'].label}
                </DropdownItem>
                <DropdownItem value="new" className={styles.dropdown_item} onClick={() => setOptionSort(SORT_OPTIONS['rate'])}>
                    {SORT_OPTIONS['rate'].label}
                </DropdownItem>
            </div>
        );
    };

    return (
        <LayoutContainer
            className={classnames([
                styles.list_wrapper,
                {
                    [styles.change_mode]: isModeList !== undefined,
                },
            ])}
        >
            <div className={styles.header}>
                <div className={styles.title}>ĐỒNG HỒ NAM</div>
                <div className={styles.breadcrumb}>Trang Chủ/ Đồng Hồ Nam</div>
            </div>
            <div className={styles.body}>
                <div className={styles.filter}>
                    <ListFilter />
                </div>
                <div className={styles.list_product}>
                    <div className={styles.banner}>
                        <Image src="https://cdn3.dhht.vn/wp-content/uploads/2019/02/dong-ho-nam-banner.jpg" />
                    </div>
                    <div className={styles.description}>
                        “Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích
                        cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu
                        đối với những người đàn ông hiện đại. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”
                    </div>
                    <div className={styles.brand}>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>CASIO</div>
                        <div className={styles.item}>SEIKO</div>
                        <div className={styles.item}>TISSOT</div>
                        <div className={styles.item}>OP</div>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>DOXA</div>
                        <div className={styles.item}>CASIO</div>
                        <div className={styles.item}>SEIKO</div>
                        <div className={styles.item}>TISSOT</div>
                        <div className={styles.item}>OP</div>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>DOXA</div>
                        <div className={styles.item}>CASIO</div>
                        <div className={styles.item}>SEIKO</div>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>OP</div>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>FOSSIL</div>
                        <div className={styles.item}>CASIO</div>
                        <div className={styles.item}>SEIKO</div>
                        <div className={styles.item}>TISSOT</div>
                        <div className={styles.item}>OP</div>
                        <div className={styles.item}>FOSSIL</div>
                    </div>

                    <div className={styles.sort}>
                        Hiển thị tất cả 6 kết quả
                        <Dropdown className={styles.dropdown} itemProps={renderItemMenu()} dropdownMenuClassName={styles.dropdown_menu}>
                            <div className={styles.dropdown_toggle}>
                                <span className={styles.text}>{optionSort.label}</span>
                                <Image className={styles.icon_dropdown} width={24} height={24} src={'/assets/phong-kham/dropdown_icon.png'} />
                            </div>
                        </Dropdown>
                        <FontAwesomeIcon className={styles.icon_list} onClick={() => setIsModeList(true)} icon={faList} color={!!isModeList ? '#990000' : '#000'} />
                        <FontAwesomeIcon className={styles.icon_card} onClick={() => setIsModeList(false)} icon={faTh} color={!isModeList ? '#990000' : '#000'} />
                    </div>
                    <div
                        className={classnames([
                            styles.list
                        ])}
                    >
                        {[...Array(10)].map((item) => (
                            <ClockCard isModeList={isModeList} className={styles.item} rate={5} price={1000000} src={src} key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default List;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('**** cc ', ctx);
  return{
    props: {}
  }
}
