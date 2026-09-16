import { Route, Routes } from 'react-router-dom'
import LessonScreen from './features/trilha-teste/LessonScreen.jsx'
import SystemsPanel from './features/trilha-teste/SystemsPanel.jsx'
import UnitPath from './features/trilha-teste/UnitPath.jsx'
import FlashcardsScreen from './features/trilha-teste/flashcards/FlashcardsScreen.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trilha" element={<SystemsPanel />} />
      <Route path="/trilha/:unitId" element={<UnitPath />} />
      <Route path="/trilha/:unitId/:lessonId" element={<LessonScreen />} />
      <Route path="/flashcards" element={<FlashcardsScreen />} />
    </Routes>
  )
}

export default App
