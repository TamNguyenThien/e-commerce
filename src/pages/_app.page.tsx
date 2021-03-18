import { useCallback } from 'react';
import App, { AppContext } from 'next/app';

// Components
import Head from 'next/head';
import Layout from '@Components/Layout';

// 3rds

// Utilities
import MobileDetect from 'mobile-detect';

// Contexts
import ViewDetected, { getDeviceType } from '@Components/Utils/ViewDetected';

// Styles
import '@Styles/globals.scss';

function MyApp({ Component, pageProps, deviceType, disableFooter, disableHeader, token }) {
    // registerServiceWorker(async (serviceWorker: ServiceWorkerRegistration) => {
    //     const [fcmToken, deviceId] = await Promise.all([initializeFirebaseMessage(serviceWorker), getFingerprintId()]);

    //     updateUserDevice(deviceId, fcmToken);
    // });

    // useEffect(() => {
    //     if (router.pathname.includes('tra-cuu')) {
    //         setEnable(false);
    //     } else {
    //         setEnable(true);
    //     }
    // }, []);

    return (
        <>
            <Head>
                <meta name="copyright" content="eDoctor" />
                <meta name="theme-color" content="#248eff" />
                <meta name="distribution" content="Global" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="keywords" content="eDoctor, Sức khoẻ, Nhà thuốc, theo dõi sức khỏe, cải thiện sức khỏe"></meta>

                <link rel={'manifest'} href={'/manifest.json'} />
                <link rel="canonical" />
                <link rel="apple-touch-icon" href="/assets/icon_2x.png"></link>
                <link rel="icon" href="/favicon.ico" type="image/gif" sizes="16x16" />

                {/* FONTS */}
                <link as={'style'} rel={'preload'} href={'/font.css'} />
                <link rel={'stylesheet'} href={'/font.css'} />

                {/* ANIMATE CSS */}
                <link as={'style'} rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

                {/* JSON LD */}
                {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonLD.website) }} /> */}

                {/* ANALYTICS */}
            </Head>

            <ViewDetected deviceType={deviceType}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ViewDetected>
        </>
    );
}

const getLayoutConfiguration = (appContext: AppContext) => {
    const userDetected = new MobileDetect(appContext.ctx.req.headers['user-agent']);
    const deviceType = getDeviceType(userDetected);

    let disableFooter = false;
    let disableHeader = false;

    if (appContext.ctx.pathname.includes('/thong-bao') && deviceType === 'mobile') {
        disableFooter = true;
        disableHeader = true;
    }

    return {
        disableFooter,
        disableHeader,
    };
};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    const userDetected = new MobileDetect(appContext.ctx.req.headers['user-agent']);
    const deviceType = getDeviceType(userDetected);

    const layoutConfiguration = getLayoutConfiguration(appContext);

    return { ...appProps, ...layoutConfiguration, deviceType };
};

export default MyApp;
