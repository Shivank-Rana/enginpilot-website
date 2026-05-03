import './globals.css'

export const metadata = {
  title: 'ENGINPILOT - Operating System for Physical Assets',
  description: 'Physics-Governed Operating System for Physical Assets. Mission Control for your industrial systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
