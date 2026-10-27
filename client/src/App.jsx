import { Route, Routes } from 'react-router-dom'
import LessonScreen from './features/trilha-teste/LessonScreen.jsx'
import SystemsPanel from './features/trilha-teste/SystemsPanel.jsx'
import UnitPath from './features/trilha-teste/UnitPath.jsx'
import FlashcardsScreen from './features/trilha-teste/flashcards/FlashcardsScreen.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ReviewScreen from './pages/ReviewScreen.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<AuthPage />} />
        <Route path="/cadastro" element={<AuthPage />} />
        <Route path="/painel" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/revisar-erros" element={<ProtectedRoute><ReviewScreen /></ProtectedRoute>} />
        <Route path="/trilha" element={<ProtectedRoute><SystemsPanel /></ProtectedRoute>} />
        <Route path="/trilha/:unitId" element={<ProtectedRoute><UnitPath /></ProtectedRoute>} />
        <Route path="/trilha/:unitId/:lessonId" element={<ProtectedRoute><LessonScreen /></ProtectedRoute>} />
        <Route path="/flashcards" element={<ProtectedRoute><FlashcardsScreen /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
