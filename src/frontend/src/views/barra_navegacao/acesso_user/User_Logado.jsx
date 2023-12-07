import './User_Logado.css';
export default function UserLogado() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className='UserB'>
            
                <img src="src/assets/img_barnav/controle-de-video-game.png" alt="Logo Do Usuario" />

            <button  onClick={logout}><p>SAIR</p></button>
        </div>
    )
}
