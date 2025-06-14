
import './App.css';
import Scrolltotop from "./Scrolltotop";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index";

function App() {
  return (
  <HelmetProvider>
      <div className="App">
        <Router>
          <Scrolltotop />
          <Routes>
            <Route path="/" element={<Index/>} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
