import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets:['latin'], display:'swap' });
export const metadata={title:'OrdnungsWerk Digital',description:'Digitale Ordnung, Dokumentenstruktur und Ablagesysteme für Privatpersonen und Unternehmen.'};
export default function RootLayout({children}){return <html lang="de"><body className={inter.className}>{children}</body></html>}
