import React from 'react';
import { Outlet } from 'react-router';
import Home from '../components/Home';

const MainLayout = () => {
    return (
        <div>

                
             <div>
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default MainLayout;