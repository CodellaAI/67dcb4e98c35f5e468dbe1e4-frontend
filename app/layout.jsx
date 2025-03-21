
import './globals.css'

export const metadata = {
  title: 'Simple View Showcase',
  description: 'A simple one-page showcase built with NextJS and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  )
}
