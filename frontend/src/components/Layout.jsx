import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        {/* <SideBar /> */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;