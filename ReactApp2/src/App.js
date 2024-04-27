import './App.css';
import { React } from 'react';
import AppRoutes from './Routes';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SpringNasaComponent from './components/SpringNasaComponent'
import SecondPage from './components/SecondPage'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpringNasaComponent />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};


export default App;
