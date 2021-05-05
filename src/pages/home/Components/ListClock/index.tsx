import { FunctionComponent } from "react";

// Components
import ClockCard from "@Components/UI/ClockCard";
import LayoutContainer from "@Components/Layout/Components/Container";

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
];

interface listClockProps {
    className?: string;
    title?: string,
    listClock?: any,
}
const ListClock: FunctionComponent<listClockProps> = ({title}) => {
    return (
        <LayoutContainer className={styles.wrapper}>
            <div className={styles.wrapper_title}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.list_clock}>
                {listClockData.map((item, index) => (
                    <ClockCard isModeList={false} key={index} src={item.src} title={item.title} rate={item.rate} price={item.price} />
                ))}
            </div>
        </LayoutContainer>
    );
};

export default ListClock