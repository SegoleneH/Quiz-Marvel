import React from 'react';
//! ^ dans React v18, cette ligne n'est plus nécessaire
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../Signup';
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
