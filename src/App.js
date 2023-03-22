import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
         <Provider store={store}>
         <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
         </Provider>
    </div>
  );
}

export default App;
