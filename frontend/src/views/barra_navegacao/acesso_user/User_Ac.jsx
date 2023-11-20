import { Link } from 'react-router-dom';
import { useAuth } from '../../app/hooks/useAuth';
import './User_Ac.css';
export default function UserAcess() {
    const { signedIn, signout } = useAuth();
    return (
        <div className='UserA'>
            <a href="/Login">
                <img src="src/assets/img_barnav/controle-de-video-game.png" alt="Logo Do Usuario" />
            </a>
            {signedIn && <button onClick={signout}>Sair</button>}
            {!signedIn && <Link to="/Login">Entrar</Link>}
        </div>
    )
}
