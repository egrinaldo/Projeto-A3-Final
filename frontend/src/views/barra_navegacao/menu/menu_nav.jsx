import { useAuth } from '../../app/hooks/useAuth';
import './menu_nav.css';

export default function NavMenu() {
    const { signedIn } = useAuth();
    return (
        <div className="menu_nave">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/Sobre">SOBRE</a></li>
                {signedIn && <li><a href="/MinhaArea">MINHA ÁREA</a></li>}
                {signedIn && <li><a href="/PlataformaCrud">PLATAFORMA</a></li>}
            </ul>
        </div>
    )
}
