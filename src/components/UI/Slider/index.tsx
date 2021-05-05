import { AnchorHTMLAttributes, createContext, FunctionComponent, MouseEventHandler, useContext, forwardRef, useState, RefAttributes, useRef, useEffect } from 'react';

// Components

// Styles
import styles from './Slider.module.scss';

// Utilities
import classnames from 'classnames';

// Types
import { LinkProps } from 'next/link';
import SlickSlider, { Settings } from 'react-slick';
import Image from '../Image';

interface SlickArrowProps {
    arrowSrc?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    onClick?: MouseEventHandler;
    direction?: 'next' | 'prev';
}

export const SlickArrow: FunctionComponent<SlickArrowProps> = (props) => {
    return (
        <span className={classnames([styles.slick_arrow, styles[props.direction], props.className])} onClick={props.onClick}>
            <Image src={props.arrowSrc} width={props.width} height={props.height} />
        </span>
    );
};

SlickArrow.defaultProps = {
    width: '30px',
    height: '32px',
    direction: 'prev',
    arrowSrc: '/assets/slick_arrow.png',
};

interface SliderAnchorProps {
    className?: string;
}

const SliderContext = createContext({ isSwiping: false });

export const SliderAnchor: FunctionComponent<LinkProps & SliderAnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => {
    const { isSwiping } = useContext(SliderContext);

    const handleAnchorItemClick: MouseEventHandler = (event) => {
        event.preventDefault();
    };

    const anchorProps = {
        ...props,
        className: classnames([
            styles.anchor,
            className,
            {
                [styles.disabled]: isSwiping,
            },
        ]),
        ...(isSwiping && { onClick: handleAnchorItemClick }),
    };

    return <a {...anchorProps}>{props.children}</a>;
};

interface SliderProps {
    className?: string;
}

const Slider: FunctionComponent<SliderProps & Settings & RefAttributes<any>> = forwardRef(({ className, onReInit, afterChange, beforeChange, ...props }, ref) => {
    const isMounted = useRef<boolean>(false);
    const timeOutEndSwiping = useRef<any>(null);
    const [isSwiping, setSwiping] = useState<boolean>(false);

    useEffect(() => clearTimeout(timeOutEndSwiping.current), []);

    const handleSwipe = () => {
        setSwiping(false);
    };

    const handleAfterChange = (currentSlide) => {
        setSwiping(false);
        if (afterChange) {
            afterChange(currentSlide);
        }
    };

    const handleBeforeChange = (currentSlide, nextSlide) => {
        setSwiping(isMounted.current);

        if (beforeChange) {
            beforeChange(currentSlide, nextSlide);
        }
    };

    const handleReInit = () => {
        if (onReInit) {
            onReInit();
        }

        clearTimeout(timeOutEndSwiping.current);
        timeOutEndSwiping.current = setTimeout(() => {
            setSwiping(false);
        }, 100);

        isMounted.current = true;
    };

    return (
        <SliderContext.Provider value={{ isSwiping }}>
            <SlickSlider {...props} onSwipe={handleSwipe} onReInit={handleReInit} beforeChange={handleBeforeChange} afterChange={handleAfterChange} ref={ref} className={className}>
                {props.children}
            </SlickSlider>
        </SliderContext.Provider>
    );
});

export default Slider;
