import Script from "next/script";
import {
  GA_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  hasGoogleTag,
  hasMetaPixel,
} from "@/lib/analytics";

/**
 * Scripts de rastreamento carregados com estratégia `afterInteractive`,
 * para não competir com o LCP. Se nenhuma variável de ambiente estiver
 * preenchida, nada é injetado na página.
 */
export function Analytics() {
  const primaryTag = GA_ID || GOOGLE_ADS_ID;

  return (
    <>
      {hasGoogleTag ? (
        <>
          <Script
            id="gtag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${primaryTag}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
              ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
            `}
          </Script>
        </>
      ) : null}

      {hasMetaPixel ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
