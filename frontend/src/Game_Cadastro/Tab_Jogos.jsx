import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

import './Tab_Jogos.css';

export default function Tab_Jogos() {
  return (
    <div className='Form_Tab'>
      <table className='Form_Grid'>
        <thead>
        <tr className='Form_Name'>
            <th>AVALIAÇÃO</th>
            <th>NOME</th>
            <th>PLATAFORMA</th>
            <th>CATEGORIA</th>
            <th>ESTADO DO JOGO</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>           
        </tr>
        </thead>
        <tbody>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td>CONSOLE</td>
            <td>RPG</td>
            <td>ZERADO</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'>< AiFillDelete /></button></td>    
        </tr>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td>CONSOLE</td>
            <td>RPG</td>
            <td>ZERADO</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'><AiFillDelete /></button></td>  
        </tr>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td>CONSOLE</td>
            <td>RPG</td>
            <td>ZERADO</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'>< AiFillDelete /></button></td>          
        </tr>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td>CONSOLE</td>
            <td>RPG</td>
            <td>ZERADO</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'>< AiFillDelete /></button></td>          
        </tr>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td>CONSOLE</td>
            <td>RPG</td>
            <td>ZERADO</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'>< AiFillDelete /></button></td>           
        </tr>  
        </tbody>
        
      </table>
    </div>
  )
}
