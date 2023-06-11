import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: "Livramento.dev",
  description: 'Matheus do Livramento - Back-end software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <main className="min-h-screen bg-stone-900 py-16 px-56 flex flex-col gap-32">
          <Nav/>
            {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
