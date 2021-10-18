import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
export default MyApp;
