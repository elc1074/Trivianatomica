import { Route, Routes } from 'react-router-dom'
import LessonScreen from './features/trilha-teste/LessonScreen.jsx'
import SystemsPanel from './features/trilha-teste/SystemsPanel.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trilha" element={<SystemsPanel />} />
      <Route path="/trilha/:unitId" element={<LessonScreen />} />
    </Routes>
  )
}

export default App
