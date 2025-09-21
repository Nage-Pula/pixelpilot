import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Script from 'next/script';

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
      <head>
        <Script id="gainsight-px"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:`
                (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
                    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
                  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
                  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
                })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-WLHVOASMAZVB-1");`            
          }}
            />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col h-full">
      <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}