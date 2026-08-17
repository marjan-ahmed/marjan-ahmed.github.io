import {setRequestLocale} from 'next-intl/server';
import { CommandPaletteProvider } from '@/components/site/command-palette';
import { HeroConsole } from '@/components/site/hero-console';
import { ProofStrip } from '@/components/site/proof-strip';
import { OperatingPrinciples } from '@/components/site/operating-principles';
import { DeploymentsSection } from '@/components/site/deployments-section';
import { CapabilityMatrix } from '@/components/site/capability-matrix';
import { ShipLog } from '@/components/site/ship-log';
import { RoadmapNote } from '@/components/site/roadmap-note';
import ContactSection from '@/components/section/contact-section';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'de' }, { locale: 'ja' }, { locale: 'zh' }, { locale: 'ar' }, { locale: 'ur' }];
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <CommandPaletteProvider>
      <main className="min-h-dvh">
        <HeroConsole />
        <ProofStrip />
        <OperatingPrinciples />
        <DeploymentsSection />
        <CapabilityMatrix />
        <ShipLog />
        <RoadmapNote />
        <ContactSection />
      </main>
    </CommandPaletteProvider>
  );
}
