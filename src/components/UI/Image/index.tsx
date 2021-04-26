import { useState, useEffect, forwardRef, SyntheticEvent, ImgHTMLAttributes } from 'react';

import classnames from 'classnames';

import styles from './Image.module.scss';

export interface ImageProps {
    src: string;
    alt?: string;
    errorSrc?: string;
    className?: string;
    // originSrc?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps & ImgHTMLAttributes<HTMLImageElement>>(({ src, className, errorSrc, onClick, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(src || errorSrc);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setImgSrc(src || errorSrc);
    }, [src]);

    const handleOnClick = (event) => {
        try {
            return
            // gtag('event', 'user_click_banner', {
            //     event_label: event?.target?.alt,
            //     event_category: 'Click',
            // });
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        }

        if (onClick) {
            onClick(event);
        }
    };

    const handleImgError = (event: SyntheticEvent<HTMLImageElement>) => {
        if (event.type === 'error') {
            setIsError(true);
            setImgSrc(errorSrc);
        }
    };

    return <img {...props} ref={ref} src={imgSrc} onError={handleImgError} onClick={handleOnClick} className={classnames([styles.wrapper, className, { [styles.error]: isError }])} />;
});

Image.defaultProps = {
    className: '',
    alt: 'eDoctor',
    errorSrc: '/assets/default_img.png',
};

export default Image;
