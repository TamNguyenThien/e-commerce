import Head from 'next/head';
import { FunctionComponent } from 'react';
import styles from '../../styles/Home.module.css';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';

export interface HomeProps {}

const Home: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps> & HomeProps> = (props) => {
    const HomeBanner = dynamic(() => import('@Pages/home/Components/Banner'), { ssr: false, loading: () => <div style={{ height: '400px' }} /> });
    // const Sliders = dynamic(() => import('@Pages/home/Components/Sliders'), { ssr: false, loading: () => <div style={{ height: '400px' }} /> });
    return (
        <div>
            <Head>
                <title>Theme-template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeBanner />
            {/* <Sliders /> */}
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = {};
    return {
        props,
    };
};
