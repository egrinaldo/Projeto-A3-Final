import './User_Logado.css';
export default function UserLogado() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className='UserB'>
            <a href="/">
                <img src="src/assets/img_barnav/controle-de-video-game.png" alt="Logo Do Usuario" />
            </a>
            <button onClick={logout}>SAIR</button>
        </div>
    )
}
