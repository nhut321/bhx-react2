
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail';
import MainContextProvider from './context/MainContext';
import LoginBox from './components/LoginBox';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function App() {
  return (
    <MainContextProvider>
      <div className="App">
        <Routes>
          <Route path='*' element={(
            <>
              <Header />
              <Sidebar />
              <LoginBox />
              <div className="main">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/detail/:id' element={<ProductDetail />} />
                </Routes>
                <Footer />
              </div>
            </>
          )} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>

    </MainContextProvider>
  );
}

export default App;
