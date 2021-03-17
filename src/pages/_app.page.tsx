import Layout from '@Components/Layout';
import Head from 'next/head';
import '../../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
