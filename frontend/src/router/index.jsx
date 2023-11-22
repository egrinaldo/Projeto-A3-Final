
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MinhaArea from '../pages/MinhaArea';
import PlataformaCrud from '../pages/PlataformaCrud';
import Sobre from '../pages/Sobre';
import { AuthGuard } from "./AuthGuard";
import Politica from '../pages/Politica';


// Esse arquivo serve para direcionar as rotas da aplicação, validando as rotas privadas e rotas públicas
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Cadastro' element={<Cadastro />} />
                </Route>

                <Route element={<AuthGuard isPrivate={true} />}>
                    <Route path='/MinhaArea' element={<MinhaArea />} />
                    <Route path='/PlataformaCrud' element={<PlataformaCrud />} />
                </Route>

                <Route path='/' element={<Home />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Politica' element={<Politica/>} />
            </Routes>
        </BrowserRouter>
    );
}
