import "./Barra_User.css";

export default function Bar_User() {
  return (
    <section className="barUser">
      <div className="fotoUser">
        <div className="fotoUserInt">
          <button>
            <input
              id="fotoPerfil"
              type="image"
              src="src/assets/img_user/userimg.jfif"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="barName">
        <p id="nameId">NALLDÃO_SNYPER</p>
      </div>
      <div className="horasjg">
        <div className="horasjg_card">
          <div className="horasjg_title">
            <p id="horasjg_horas">20h</p>
            <p id="horasjg_nome">Jogadas</p>
        </div>
        </div>
      </div>
    </section>
  );
}
