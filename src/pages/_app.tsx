import React, { PropsWithChildren, ReactElement } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from "@/redux/provider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout: any =
    Component.getLayout ??
    (({ children }: PropsWithChildren) => (
      <React.Fragment>{children}</React.Fragment>
    ));

//console.log(Layout);
  
return (
    <Provider>
      <div className="overflow-x-hidden">
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div className="max-w-6xl min-h-screen mx-auto">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </Provider>
  );
}
