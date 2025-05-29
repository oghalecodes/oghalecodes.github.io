import type { Metadata } from "next"
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"
import "/global.css"

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

// Note: only Urbanist is applied globally; other fonts can be applied per component as needed

export const metadata: Metadata = {
  title: "IAMOGHALE | Full Software Engineer",
  authors: [{ name: "Oghale" }],
  keywords: ["Full Stack Developer", "Web Developer", "App Developer", "Portfolio"],
  description: "I am Oghale, a Full Stack Developer specializing in web and app development. I create innovative solutions using modern technologies like NodeJS, React, Angular, and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" className="zelio">
      <body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
