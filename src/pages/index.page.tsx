import Head from 'next/head';
import { FunctionComponent } from 'react';
import styles from '../../styles/Home.module.css';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { DataManager } from '@Components/Utils/DataTransfer';
import BlockItem from './home/Components/BlockItem';

export interface HomeProps {}

const Home: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps> & HomeProps> = (props) => {
    console.log(props, 'props11');
    const Navbar = dynamic(() => import('@Pages/home/Components/Navbar'), { ssr: false, loading: () => <div style={{ height: '160px' }} /> });
    const HomeBanner = dynamic(() => import('@Pages/home/Components/Banner'), { ssr: false, loading: () => <div style={{ height: '800px' }} /> });
    const Sliders = dynamic(() => import('@Pages/home/Components/Sliders'), { ssr: false, loading: () => <div style={{ height: '400px' }} /> });
    return (
        <DataManager {...props}>
            <Head>
                <title>Theme-template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HomeBanner />
            {/* <Sliders /> */}

            <BlockItem />
        </DataManager>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const props = { a: '1', b: '2' };
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
    console.log(posts, 'post');
    return {
        props,
    };
};
