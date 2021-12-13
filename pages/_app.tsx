import React, { useEffect } from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';
import { socketManager } from 'util/index';
import { socketKey } from 'constants/index';

socketManager.init(socketKey.initAddress);

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
