import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ToastProvider placement="bottom-left">
        <Component {...pageProps} />
      </ToastProvider>
    </RecoilRoot>
  );
}
export default MyApp;
