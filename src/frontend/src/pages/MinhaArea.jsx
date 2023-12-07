import Cad_Jogos from "../views/Game_Cadastro/Cad_Jogos";
import Bar_User from "../views/Minha_Area/Barra_User";
import NavBar_User from  '../views/barra_navegacao/barnav_user'


export default function MinhaArea() {
    return (
        <div>
            <NavBar_User />
            <Bar_User />
            <Cad_Jogos />
        </div>
    )
}
