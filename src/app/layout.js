import { QueryProvider } from './components/QueryProvider'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center w-full h-screen italic font-extrabold bg-foreground">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
