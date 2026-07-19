import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Videos from './pages/Videos'
import VideoDetail from './pages/VideoDetail'

const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<VideoDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
