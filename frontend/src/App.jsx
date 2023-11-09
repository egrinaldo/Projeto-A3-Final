import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Descubra from './pages/Descubra'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import MinhaArea from './pages/MinhaArea'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Descubra' element={<Descubra />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro/>} />
        <Route path='/MinhaArea' element={<MinhaArea/>} />
      </Routes>
    </BrowserRouter>


  )
}
