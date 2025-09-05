import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';


const MainLayout = () => {
    return (
        <div className=''>
            <div>
                <Header></Header>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;