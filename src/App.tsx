import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Background } from './components/Background'
import "./scss/index.scss"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Compare from './pages/Compare'
import MyList from './pages/MyList'
import Search from './pages/Search'

const App = () => {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
              <Route element={<Search />} path="/search" />
              <Route element={<MyList />} path="/list" />
              <Route element={<Compare />} path="/compare" />
              <Route element={<Pokemon />} path="/pokemon/:id" />
              <Route element={<Navigate to="/pokemon/1" />} path="*" />
            </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
