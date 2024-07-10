import "./_styles/globals.css";
import {Lora} from 'next/font/google'

export const metadata = {
  title: "My Real Estate Website",
};

const lora = Lora({
  weight: ['400', '700', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.className}>
      <body>
        <h1> Whereas recognition of the inherent dignity</h1>
        {children}
      </body>
    </html>
  );
}


