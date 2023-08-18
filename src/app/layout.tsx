import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 


import ColorModeProvider from './ColorModeProvider'
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'manu.cologne',
  description: 'Immanuel\'s personal website',
}



export default function RootLayout({children,}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeProvider>
          <Header/>
          { children }
          <Footer/>
        </ColorModeProvider>
      </body>
    </html>
  )
}
