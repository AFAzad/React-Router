
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
     <Routes>
     <Route path="/home" element={ <h1> Home Pages </h1> }></Route>
     </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
