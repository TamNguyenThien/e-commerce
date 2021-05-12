import Head from 'next/head';
import React, { FunctionComponent } from 'react';

// Components

// Contexts
import { withAlert } from './Context';

// Styles

interface AccountProps {}

const Alert: FunctionComponent<AccountProps> = (props) => {
    return (
        <>
            <Head>
                <link rel={'preload'} as={'image'} href={'/assets/alert/error.png'} />
                <link rel={'preload'} as={'image'} href={'/assets/alert/success.png'} />
            </Head>

            {props.children}
        </>
    );
};

export default withAlert(Alert);
