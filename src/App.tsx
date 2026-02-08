import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import QuoteCards from './components/QuoteCards'
import IdentitySection from './components/IdentitySection'
import LeaderColumn from './components/LeaderColumn'
import NewsSection from './components/NewsSection'
import ChatbotSection from './components/ChatbotSection'
import PressSection from './components/PressSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <main className="content-width flex flex-col gap-4 px-5 md:px-8 py-6">
        <HeroSection />
        <PhilosophySection />
        <QuoteCards />
        <IdentitySection />
        <LeaderColumn />
        <NewsSection />
        <ChatbotSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  )
}
