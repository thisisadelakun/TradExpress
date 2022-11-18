import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Market from './Components/Market';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes> 
          <Route index element={<Home/>} />
          <Route path='Market' element={<Market />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
