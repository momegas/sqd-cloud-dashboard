import "../styles/globals.css";
import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { Theme } from "../src/theme";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Head>
        <title>Square Cloud</title>
        <meta name="description" content="Square Cloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={Theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  );
};

// withRedux wrapper that passes the store to the App Component
export default MyApp;
