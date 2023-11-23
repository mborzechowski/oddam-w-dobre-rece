import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx"

function App() {


    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/wylogowano" element={<Logout/>}/>
            </Routes>
        </Router>
    )
}

export default App
