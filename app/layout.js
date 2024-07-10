import "./globals.css";


export const metadata = {
  title: "My Real Estate Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
