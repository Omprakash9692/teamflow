import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <div>
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </div>
    </>
  )
}

export default MainLayout;