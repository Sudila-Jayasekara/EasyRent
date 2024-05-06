import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Render the Sidebar component */}
      <SideBar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;