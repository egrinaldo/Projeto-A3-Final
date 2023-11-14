import { Link } from 'react-router-dom'
import './User_Ac.css'
export default function UserAcess() {
    return (
        <div className='UserA'>
            <a href="/Login">
                <img src="src/assets/img_barnav/controle-de-video-game.png" alt="Logo Do Usuario" />
            </a>
            <p><Link to="/Login">Entrar</Link></p>
        </div>
    )
}