'use client';

import { useEffect } from 'react';

type Props = {
  value?: number;
  currency?: string;
  label?: string;
};

export default function ConversionClient({ value = 1, currency = 'GBP', label }: Props) {
  useEffect(() => {
    const gtag = (window as any).gtag;
    const conversionLabel = label ?? process.env.NEXT_PUBLIC_GTAG_CONVERSION_LABEL;

    if (!gtag) {
      console.warn('gtag not available - conversion not sent');
      return;
    }

    if (!conversionLabel) {
      console.warn('Conversion label not set (NEXT_PUBLIC_GTAG_CONVERSION_LABEL) - conversion not sent');
      return;
    }

    // Respect Do Not Track
    if (navigator.doNotTrack === '1') {
      console.info('Do Not Track enabled - conversion not sent');
      return;
    }

    try {
      gtag('event', 'conversion', {
        send_to: `${process.env.NEXT_PUBLIC_GTAG_ID ?? 'AW-16718539346'}/${conversionLabel}`,
        value,
        currency,
      });
    } catch (err) {
      console.warn('Error sending conversion', err);
    }
  }, [value, currency, label]);

  return null;
}
