import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App