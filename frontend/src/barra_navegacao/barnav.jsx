import './barnav.css'
import NavMenu from './menu/menu_nav'
import UserAcess from './acesso_user/User_Ac'

export default function Navbar(){
    return(
        <header>
            <div className='navbar'>
                    <div className='logo_nave'>
                        <img src="src/assets/img_barnav/image.png" alt="Logo do Site" />
                    </div>
                    <NavMenu />
                    <UserAcess/>
            </div>
        </header>
    )

}