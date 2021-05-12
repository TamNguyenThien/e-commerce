import { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// Apis
import postsApi from '@Libs/api/posts';
import { getServerSideHttp } from '@Libs/http/cms';

// Components
import Menu from './home/Components/Menu';
import Category from './home/Components/Caterogy';
import ListClock from './home/Components/ListClock';
import { DataManager } from '@Components/Utils/DataTransfer';
export interface HomeProps {}

const Home: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps> & HomeProps> = (props) => {
    console.log(props, 'props11');
    const HomeBanner = dynamic(() => import('@Pages/home/Components/Banner'), { ssr: false, loading: () => <div style={{ height: '800px' }} /> });
    return (
        <DataManager {...props}>
            <Head>
                <title>Theme-template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeBanner />
            <Menu />
            <Category />
            <ListClock title="ĐỒNG HỒ NAM BÁN CHẠY" />
            <ListClock title="ĐỒNG HỒ NỮ BÁN CHẠY" />

        </DataManager>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const http = getServerSideHttp(ctx);
    const postsData = await postsApi(http).find()
    console.log('**** cc ', postsData);
    return {
        props: {
            postsData,
        },
    };
};
