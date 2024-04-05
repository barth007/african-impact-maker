import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/Home/HomePage';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
      </>
    </Router>
 
  );
}

export default App;
