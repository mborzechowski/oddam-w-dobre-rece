import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import Login from "./components/Login.jsx"
function App() {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/logowanie" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
