import './App.css';

import Login from './components/Login/Login';
import Cliente from './components/Pages/Cliente';
import Proveedor from './components/Pages/Proveedor';
import NoPage from './components/Pages/NoPage';
// import UserContextProvide from './context/UserContext'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (


    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="proveedor" element={<Proveedor />} />
          <Route path="cliente" element={<Cliente />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
