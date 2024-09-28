import { Poppins } from 'next/font/google';
import "./style.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1>Ton info</h1>
        {children} 
      </body>
    </html>
  );
}
