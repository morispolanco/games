import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBanner from '../ads/TopBanner';
import BottomBanner from '../ads/BottomBanner';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative font-mono text-zinc-300">
      <div className="crt-overlay"></div>
      <TopBanner />
      
      <main className="flex-1 flex flex-col p-4 md:p-8">
        <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col relative">
          <Outlet />
        </div>
      </main>

      <BottomBanner />
    </div>
  );
};

export default Layout;
