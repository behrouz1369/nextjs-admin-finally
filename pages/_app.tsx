import "@/styles/globals.css";
import { Vazirmatn } from 'next/font/google'
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from '@/app/store'

import { ToastContainer } from 'react-toastify';
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const vazir = Vazirmatn({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
  return (

    <>
        <Provider store={store}>
            <main className={vazir.className}>
                {getLayout(<Component {...pageProps} />)}
            </main>
            <ToastContainer />
        </Provider>
    </>
  )
}
