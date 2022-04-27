import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import MajorInfo from './pages/MajorInfo';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/MajorInfo/:Faculty/:Major" element={<MajorInfo />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
