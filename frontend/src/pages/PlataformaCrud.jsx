import Plataforma_Cad from "../Plataforma/Plataforma_Cad";
import Plataforma_Tab from "../Plataforma/Plataforma_Tab";
import NavBar_User from "../barra_navegacao/barnav_user";


export default function PlataformaCrud() {
  return (
    <div>
      <NavBar_User/>
      <Plataforma_Cad/>
      <Plataforma_Tab/>
    </div>
  )
}
