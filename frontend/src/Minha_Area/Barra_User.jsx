import "./Barra_User.css";

export default function Bar_User() {
    const userLogado = JSON.parse(localStorage.getItem('user'));

    return (
        <section className="barUser">
            <div className="barName">
                <p id="nameId">{userLogado.user[0].name}</p>
            </div>
        </section>
    );
}
