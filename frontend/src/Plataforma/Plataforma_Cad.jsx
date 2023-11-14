import { AiOutlineClear } from 'react-icons/ai';
import {HiSaveAs} from 'react-icons/hi';
import "./Plataforma_Cad.css";

export default function Plataforma_Cad() {

  return (
    <div className="cad_Form">
      <div className="card_cadNome">
        <p>Cadastro da Plataforma</p>

      </div>
      <div>
        <form className="Form_Jg" action="">
          <input className="Pla_Game" type="text" placeholder="NOME DO JOGO" id="Jg_Game" required="required"/>


<div className='buttonsCadJg'>   
  <button id='limpar' type='reset'>< AiOutlineClear /></button> 
  <button id='salvar' type='submit'><HiSaveAs /></button>
   
</div>

        </form>
      </div>
    </div>
  );
}