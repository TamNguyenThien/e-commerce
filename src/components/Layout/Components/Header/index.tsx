import React, { FunctionComponent } from 'react';

// Component
import TopHeader from './Component/TopHeader';
import BottomHeader from '../Header/Component/BottomHeader';

interface NavbarProps {}
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <div>
            <TopHeader />
            <BottomHeader />
        </div>
    );
};
export default Navbar;
