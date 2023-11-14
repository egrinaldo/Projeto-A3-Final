import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import MinhaArea from './pages/MinhaArea'
import PlataformaCrud from './pages/plataformaCrud'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro/>} />
        <Route path='/MinhaArea' element={<MinhaArea/>} />
        <Route path='/PlataformaCrud' element={<PlataformaCrud/>} />
  
      </Routes>
    </BrowserRouter>


  )
}
