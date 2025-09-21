import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'PIXELPILOT - Digital Marketing',
  description: 'Grow your brand online with PIXELPILOT.',
  icons: { icon: '/pixelpilotlogo64.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-black text-white min-h-screen flex flex-col h-full">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}