import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Gradientnav from '../../components/gradientnav';
import { Outlet} from "react-router-dom";
function DefaultLayout({children}){ 

    return(
        <>
            <Gradientnav/>
            <Header/>
                <main>
                    <Outlet />
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default DefaultLayout;