import { FunctionComponent, useRef } from "react";
import classnames from 'classnames'
import Slider from 'react-slick';
// Components
import ClockCard from "@Components/UI/ClockCard";
import LayoutContainer from "@Components/Layout/Components/Container";

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// styles
import styles from './ListClock.module.scss'

const listClockData = [
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
    {
        src: [
            ' https://cdn3.dhht.vn/wp-content/uploads/2017/05/DOXA-D173TCM-4-399x399.jpg',
            'https://cdn3.dhht.vn/wp-content/uploads/2017/11/120_131.60.022.02-399x399.jpg',
            ' https://cdn3.dhht.vn/wp-content/uploads/2019/09/CASIO-AE-1200WHD-1AVDF-0-399x399.jpg',
        ],
        title: 'Casio AE-1200WHD-1AVDF – Nam – Kính Nhựa – Quartz (Pin) – Dây Kim Loại',
        rate: 4,
        price: 122000,
    },
];

interface listClockProps {
    title?: string,
    listClock?: any,
    isSlides?: boolean,
    className?: string,
}

const ListClock: FunctionComponent<listClockProps> = ({ title, isSlides }) => {
    const slider: any = useRef();

    const SampleNextArrow = (props) => {
        const { className } = props;
        return (
            <div className={className} onClick={() => slider.current.slickNext(0)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className } = props;
        return <div className={className} onClick={() => slider.current.slickPrev(0)} />;
    };

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={styles.next_arrow} />,
        prevArrow: <SamplePrevArrow />,
    };


    return (
        <LayoutContainer className={styles.wrapper}>
            <div className={styles.wrapper_title}>
                <div className={styles.title}>{title}</div>
            </div>
            {isSlides ? (
                <Slider ref={slider} {...settings} className={styles.sliders}>
                    {listClockData.map((item, index) => (
                        <ClockCard isModeList={false} key={index} src={item.src} title={item.title} rate={item.rate} price={item.price} />
                    ))}
                </Slider>
            ) : (
                <div className={styles.list_clock}>
                    {listClockData.map((item, index) => (
                        <ClockCard isModeList={false} key={index} src={item.src} title={item.title} rate={item.rate} price={item.price} />
                    ))}
                </div>
            )}
        </LayoutContainer>
    );
};

ListClock.defaultProps = {
    isSlides: false
}

export default ListClock