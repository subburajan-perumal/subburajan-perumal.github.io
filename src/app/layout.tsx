import '@styles/main.scss';
import { Inter } from 'next/font/google';
import FullscreenButton from '@components/FullScreenButton/FullScreenButton';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Subburajan Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin="true"
        />

      </head>
      <body className={inter.className}>
        {/* <Navigation /> */}
        {children}
        <FullscreenButton />
        {/* <MoveToTop /> */}
      </body>
    </html>
  );
}
