import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx"
import {AuthProvider} from './services/AuthContext.jsx';
import FormPage from "./components/FormPage.jsx";

function App() {


    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/logowanie" element={<Login/>}/>
                    <Route path="/rejestracja" element={<Register/>}/>
                    <Route path="/wylogowano" element={<Logout/>}/>
                    <Route path="/oddaj-rzeczy" element={<FormPage/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
