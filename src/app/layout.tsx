import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: '전찬혁 기술 블로그',
  description: '프론트엔드 개발자 전찬혁',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col mx-auto'>
        <Header />
        <main className='grow max-w-screen-xl mx-auto'>  
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
