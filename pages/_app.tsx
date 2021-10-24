import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider placement="bottom-left">
      <Component {...pageProps} />
    </ToastProvider>
  );
}
export default MyApp;
