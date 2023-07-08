import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Pawnshop cars',
  description: 'vennez faire des affaires en or',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="relative">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
