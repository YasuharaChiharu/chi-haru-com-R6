import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const value = {
    unstyled: true,
    pt: Tailwind,
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider value={value}>{children}</PrimeReactProvider>
      </body>
    </html>
  )
}
