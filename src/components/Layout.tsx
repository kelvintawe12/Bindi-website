import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { PageFooter } from '../pages/FooterPage';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <PageFooter />
    </div>
  );
}
