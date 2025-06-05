import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';

export const metadata = {
  title: 'LeadDash Dashboard',
  description: 'Lead management system',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="home-page-dashboard flex w-full">
          <Sidebar />
          <main className="bg-gray-50 h-full main-section w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
