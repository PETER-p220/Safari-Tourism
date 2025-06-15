import React from 'react';
import { LayoutProps } from '../../types';
import Navbar from './Navbar';
import Footer from './Footer';

const Container: React.FC<LayoutProps> = ({
  children,
  showNav = true,
  showFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {showNav && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Container;