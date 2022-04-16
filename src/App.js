import './App.css';
import Dashboard from './UI/Dashboard';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
