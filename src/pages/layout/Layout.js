import React from 'react';
import { Outlet } from 'react-router-dom';
import { 
    NavContainer,
    FooterContainer, 
} from '../../containers';


const Layout = () => {
  return (
    <>
      <NavContainer />
        <Outlet />
      <FooterContainer />
    </>
  )
}
export default Layout;
