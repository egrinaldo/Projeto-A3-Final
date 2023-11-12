import { AiOutlineClear } from 'react-icons/ai';
import {HiSaveAs} from 'react-icons/hi';
import "./Cad_Jogos.css";

export default function Cad_Jogos() {

  return (
    <div className="cad_Form">
      <div className="card_cadNome">
        <p>MINHA ÁREA</p>

      </div>
      <div>
        <form className="Form_Jg" action="">
          <input className="Jg_Game" type="text" placeholder="NOME DO JOGO" id="Jg_Game" required="required"/>
          <select className="Jg_Select" name=""  id="Jg_Estado" required="required">
                    <option value="">PLATAFORMA</option>
                    <option value="">Steam</option>
                    <option value="">Playstation</option>
                    <option value="">Xbox</option>
                    <option value="">Nintendo</option>
                    <option value="">Mobile</option>
                    <option value="">PC</option>
                    <option value="">Epic Games</option>
                    <option value="">Blizzard</option>
                    <option value="">Riot Games</option>
                    <option value="">Ubsoft</option>
                    <option value="">Outros</option>
          </select>
          <select className="Jg_Select" name=""  id="Jg_Estado" required="required">
                    <option value="">CATEGORIA</option>
                    <option value="">Ação</option>
                    <option value="">Aventura</option>
                    <option value="">Corrida</option>
                    <option value="">Esporte</option>
                    <option value="">Estratégia</option>
                    <option value="">RPG</option>
                    <option value="">Simulação</option>
                    <option value="">Tiro</option>
                    <option value="">Luta</option>
                    <option value="">Plataforma</option>
                    <option value="">Musical</option>
                    <option value="">Survival</option>

          </select>
          <select className="Jg_Select" name=""  id="Jg_Estado" required="required">
                    <option value="">ESTADO DO JOGO</option>
                    <option value="">ATIVO</option>
                    <option value="">PAUSADO</option>
                    <option value="">FINALIZADO</option>
          </select>

          <input className="Jg_Game"  type="text" placeholder="AVALIAÇÃO" id="Jg_Desenv" required="required"/>



<div className='buttonsCadJg'>

  
            
  <button id='limpar' type='reset'>< AiOutlineClear /></button> 
  
  <button id='salvar' type='submit'><HiSaveAs /></button>
   
</div>

        </form>
      </div>
    </div>
  );
}