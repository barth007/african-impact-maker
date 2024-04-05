import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import NotFound from './components/not_found/NotFound';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </>
    </Router>
 
  );
}

export default App;
