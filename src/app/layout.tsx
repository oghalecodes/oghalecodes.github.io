import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Senior Software Engineer',
  description: 'Portfolio of a Senior Software Engineer with 8+ years of experience',
  keywords: 'software engineer, developer, portfolio, full stack, react, next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
                    document.documentElement.setAttribute('data-theme', theme);
                    document.documentElement.style.setProperty('color-scheme', theme);
                  }
                  // Add hydrated class after a brief delay to prevent flash
                  setTimeout(function() {
                    document.documentElement.classList.add('hydrated');
                  }, 50);
                } catch (e) {
                  console.warn('Theme initialization failed:', e);
                  document.documentElement.classList.add('hydrated');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
