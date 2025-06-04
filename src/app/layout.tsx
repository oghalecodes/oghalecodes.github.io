import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import '@/styles/main.scss';
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { NavbarWrapper } from '../components/NavbarWrapper';
import ImageHoverEffects from '@/components/elements/ImageHoverEffects';
import ScrollToTop from '@/components/elements/ScrollToTop';

const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--urbanist",
  display: 'swap',
})
const playfair_display = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--playpair",
  display: 'swap',
})
const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: "--dmMono",
  display: 'swap',
})

export const metadata = {
  title: 'Oghale Etomu - Senior Software Engineer',
  description: 'Portfolio of a Senior Software Engineer with 8+ years of experience',
  keywords: 'software engineer, developer, portfolio, full stack, react, next.js, iamoghale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="zelio" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'dark' || theme === 'light') {
                    document.documentElement.setAttribute('data-bs-theme', theme);
                    document.documentElement.style.setProperty('color-scheme', theme);
                  }
                } catch (e) {
                  console.warn('Theme initialization failed:', e);
                }
                
                // Add hydrated class after a brief delay to prevent flash
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(function() {
                    document.documentElement.classList.add('hydrated');
                  }, 100);
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`home-page-2 ${urbanist.className} ${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`} suppressHydrationWarning>
        <ImageHoverEffects />
        <ErrorBoundary>
          <ThemeProvider>
            <NavbarWrapper />
            <main>{children}</main>
            <Footer />
            <ScrollToTop showProgress={true} />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
