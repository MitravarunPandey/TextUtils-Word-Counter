import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'; // corrected import
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Text Util - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "Text Util - Light Mode";
    }
  };

  return (
    <>
      <Router> {/* Wrap your routes with Router */}
        <Navbar title="TextUtiles" mode={mode} togleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes> {/* Define your routes inside Routes */}
          <Route path="/" element={<Navigate to="/TextForm" />} />
            <Route exact path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter Your Text For Analyze" mode={mode} />} />
            <Route  exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
