import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectA1 from './pages/ProjectA1'
import ProjectA2 from './pages/ProjectA2'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ifsca-regulatory-change-execution" element={<ProjectA1 />} />
        <Route path="/projects/str-operations-playbook" element={<ProjectA2 />} />
      </Routes>
    </div>
  )
}

export default App
