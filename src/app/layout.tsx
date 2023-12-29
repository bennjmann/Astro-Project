import type { Metadata } from 'next'

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/normalize";
import "open-props/buttons";

import '@/styles/global.css'


import "@fontsource/work-sans";
import "@fontsource/merriweather";

import Header from "@/components/Header";
import Footer from '@/components/Footer';
import NotificationProvider from "@/providers/NotificationProvider";
import Notification from "@/components/Notification";


export const metadata: Metadata = {
    title: 'Bennjmann Redman',
    description: 'Bennjmann Redman Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <NotificationProvider>
          <body>
            <Notification/>
            <Header/>
                {children}
            <Footer/>
          </body>
      </NotificationProvider>
      </html>
  )
}
