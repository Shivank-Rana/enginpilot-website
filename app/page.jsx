import Header from '@/components/Header'
import SystemGraphHero from '@/components/SystemGraphHero'
import EnginStack from '@/components/EnginStack'
import UseCases from '@/components/UseCases'
import TrustLayer from '@/components/TrustLayer'
import SystemInspectorPanel from '@/components/SystemInspectorPanel'
import PlatformSection from '@/components/PlatformSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <SystemGraphHero />
      <section id="architecture">
        <EnginStack />
      </section>
      <section id="monitoring">
        <SystemInspectorPanel />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="capabilities">
        <TrustLayer />
      </section>
      <section id="platform">
        <PlatformSection />
      </section>
      <Footer />
    </main>
  )
}
