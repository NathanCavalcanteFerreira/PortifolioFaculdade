import {
    BrowserRouter as Router,
    Routes, 
    Route 
    } from 'react-router-dom'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"

export const RoutesNavigation = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
    )
}