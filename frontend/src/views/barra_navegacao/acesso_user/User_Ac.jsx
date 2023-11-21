import { Link } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';
import './User_Ac.css';
export default function UserAcess() {
    const { signedIn, signout } = useAuth();
    return (
        <div className='UserA'>
            
                <img src="src/assets/img_barnav/controle-de-video-game.png" alt="Logo Do Usuario" />
            
            {signedIn && <button id='butSairLogin' onClick={signout}><p>Sair</p></button>}
            {!signedIn && <button id='butSairLogin'><Link to="/Login"><p>Entrar</p></Link></button> }
        </div>
    )
}
