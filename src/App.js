import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = (mode) => {
    if (mode === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === 'red') {
      setMode('red');
      document.body.style.backgroundColor = '#bc5454ff';
      showAlert("Red mode has been enabled", "success");
    } else if (mode === 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#4bb543ff';
      showAlert("Green mode has been enabled", "success");
    } else if (mode === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#3b5998ff';
      showAlert("Blue mode has been enabled", "success");
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
