import "./Cad_Jogos.css";

export default function Cad_Jogos() {

  return (
    <div className="cad_Form">
      <div className="card_cadNome">
        <p>MEUS</p>
        <p>FAVORITOS</p>
      </div>
      <div>
        <form className="Form_Jg" action="">
          <input className="Jg_Game" type="text" placeholder="NOME" id="Jg_Game" required="required"/>
          <input className="Jg_Game"  type="text" placeholder="DESENVOLVEDORA" id="Jg_Desenv" required="required"/>
          <input className="Jg_Plataf"  type="text" placeholder="PLATAFORMA" id="Jg_Plataf" required="required"/>
          <input className="Jg_Categoria"  type="text" placeholder="CATEGORIA" id="Jg_Categ" required="required"/>
          <select className="Jg_Select" name=""  id="Jg_Estado" required="required">
                    <option value="">ESTADO DO JOGO</option>
                    <option value="">ATIVO</option>
                    <option value="">PAUSADO</option>
                    <option value="">FINALIZADO</option>
          </select>
          <label className="Jg_Arquiv" htmlFor="Jg_Img">
          <div className="text_Arquiv">
             <span>ADICIONE UMA CAPA</span>
          </div>
              <input type="file"  id="Jg_Img" required="required"/>
          </label>
          
            <label className='But_Salvar' htmlFor="Salvar_Jg">
            <div >
            <img src="src/assets/img_salvar/salvar2.png" alt="" />
          </div>
          <input type="submit" value="" placeholder='SAVE' id="Salvar_Jg"  />
            </label>

            <label className='But_Excluir' htmlFor="Excluir_Jg">
            <div >
            <img src="src/assets/img_salvar/excluir.png" alt="" />
          </div>
          <input type="reset" value="" placeholder='SAVE' id="Excluir_Jg" />
            </label>

        </form>
      </div>
    </div>
  );
}