import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Narrative from './components/Narrative'
import Systems from './components/Systems'
import Thinking from './components/Thinking'
import Chess from './components/Chess'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="shell">
      <Navbar />
      <main className="inner">
        <Hero />
        <Narrative />
        <Systems />
        <Thinking />
        <Chess />
        <Footer />
      </main>
    </div>
  )
}
