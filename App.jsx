import { Header, Home, About, Analysis, Organization, Products, Contact, Footer } from './src/components'
import './src/styles/globals.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Analysis />
        <Organization />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
