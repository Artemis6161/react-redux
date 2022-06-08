import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/header'
import Productlisting from './containers/productlisting';
import Productdetails from './containers/productdetails';
function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <Routes>
     <Route path="/" element={<Productlisting/>} />
     <Route path="/product/:productId" element={<Productdetails/>} />
     <Route> 404 Not Found!</Route>
     </Routes>
     </Router>
</div>
  );
}

export default App;
