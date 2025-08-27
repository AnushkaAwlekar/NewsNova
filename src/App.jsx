import './App.css'
import"bootstrap/dist/css/bootstrap.min.css"
import WelcomePage from './assets/components/WelcomePage'
import NewsPage from './assets/components/NewsPage'
import Notes from './assets/components/Notes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './assets/components/News'

function App() {

  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/NewsPage" element={<NewsPage />} />
                <Route path="/Notes" element={<Notes />} />
                <Route path="/News/:id" element={<News />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
