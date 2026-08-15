'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSavedLocale, saveLocale, detectBrowserLocale } from '@/lib/locale-preference';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const saved = getSavedLocale();
    const locale = saved ?? detectBrowserLocale();
    if (!saved) saveLocale(locale);
    router.replace(`/${locale}`);
  }, [router]);

  // Matches the dark theme so this instant is a blank beat, not a white flash.
  return <div style={{ minHeight: '100vh', background: '#151310' }} />;
}
