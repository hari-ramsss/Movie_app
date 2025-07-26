import './css/App.css'
import Favourites from './pages/favourite';
import Home from './pages/home';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MoviesProvider } from './contexts/MovieContext';
function App() {
  return (
    <MoviesProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />

      </Routes>
    </main>
    </MoviesProvider>
  )
}

export default App
