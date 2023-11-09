import Cad_Jogos from "../Game_Cadastro/Cad_Jogos";
import Tab_Jogos from "../Game_Cadastro/Tab_Jogos";
import Bar_User from "../Minha_Area/Barra_User";
import NavBar_User from "../barra_navegacao/barnav_user";


export default function MinhaArea() {
  return (
    <div>
      <NavBar_User/>
      <Bar_User />
      <Cad_Jogos />
      <Tab_Jogos />
    </div>
  )
}
