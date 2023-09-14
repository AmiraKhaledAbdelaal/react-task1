import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import LastFooter from '../lastfooter/LastFooter';

function Layout() {
    return (
        <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
        <LastFooter/>
            
        </>
    );
}

export default Layout;