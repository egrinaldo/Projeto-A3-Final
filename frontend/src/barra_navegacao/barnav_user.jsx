import './barnav.css'
import Menu_User from './menu/menu_user'
import UserLogado from './acesso_user/User_Logado'

export default function NavBar_User(){
  return (
    <header>
    <div className='navbar'>
            <div className='logo_nave'>
                <img src="src/assets/img_barnav/image.png" alt="Logo do Site" />
            </div>
            <Menu_User />
            <UserLogado />
    </div>
</header>
  )
}
