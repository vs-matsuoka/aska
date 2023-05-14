import Script from 'next/script';
import { GA_TRACKING_ID } from 'utils/gtag';

const GaScript = () => (
  <>
    {GA_TRACKING_ID && (
      <>
        <Script id="load-ga" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
        <Script id="load-ga-script">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </>
    )}
  </>
);

export default GaScript;
