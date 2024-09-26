import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { AuthProvider } from './auth-provider'
import { ThemeProvider } from './theme-provider'
import Header from './components/Header'
import Footer from './components/Footer'

const ibmPlexMono = localFont({
  src: [
    { path: '../app/fonts/IBMPlexMono-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../app/fonts/IBMPlexMono-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../app/fonts/IBMPlexMono-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../app/fonts/IBMPlexMono-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-ibm-plex-mono'
})

export const metadata: Metadata = {
  title: 'Blogorious - Un blog increíble sobre cosas geniales',
  description: 'Este es un blog para compartir pensamientos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} font-mono min-h-screen flex flex-col`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}