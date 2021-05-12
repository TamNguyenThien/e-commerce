import { FunctionComponent, useRef } from 'react';
import Image from '../Image';
import Rater from 'react-rater';
import Slider from 'react-slick';
import classnames from 'classnames';

// components
import { toCurrency } from '@Components/Utils/utils';

// styles
import styles from './ClockCard.module.scss';
interface ClockCardProps {
    rate?: number;
    title?: string;
    price?: number;
    src?: Array<any>;
    className?: string;
    isModeList?: boolean
}
const ClockCard: FunctionComponent<ClockCardProps> = ({ src, title, rate, price, className, isModeList }) => {
    const slider: any = useRef();

    const SampleNextArrow = (props) => {
        const { className } = props;
        return <div className={className} onClick={() => slider.current.slickNext(0)} />;
    };

    const SamplePrevArrow = (props) => {
        const { className } = props;
        return <div className={className} onClick={() => slider.current.slickPrev(0)} />;
    };

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const classNameWrapper = classnames([
        styles.body,
        className,
        {
            [styles.mode_list]: !!isModeList,
        },
    ]);

    return (
        <div className={classNameWrapper}>
            <Slider ref={slider} {...settings} className={styles.banner}>
                {src.map((item) => (
                    <Image key={item} className={styles.banner} src={item} />
                ))}
            </Slider>
            <div className={styles.content}>
                <div className={styles.title}>
                    <a href="/san-pham/[id]">{title}</a>
                </div>
                <Rater total={5} rating={rate} interactive={false} />
                <div className={styles.price}>{toCurrency(price)}</div>
            </div>
        </div>
    );
};

ClockCard.defaultProps = {
    isModeList: true,
    title: 'Citizen BI5006-81P – Nam – Quartz (Pin) – Dây Kim Loại',
};
export default ClockCard;
