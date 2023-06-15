import logo from './logo.svg';
import './App.css';
import {Main} from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <Router>
      <Routes>
              {/* <Route path='/discover' element={<DiscoverPage/>} /> */}
              <Route path='/' element={<Main/>} />
    </Routes>
      </Router>
    
  

    
      
    </div>
  );
}

export default App;
