import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

import './Tab_Jogos.css';

export default function Tab_Jogos() {
  return (
    <div className='Form_Tab'>
      <table className='Form_Grid'>
        <thead>
        <tr className='Form_Name'>
            <th>Nota</th>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Editar</th>
            <th>Excluir</th>           
        </tr>
        </thead>
        <tbody>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>Zelda</td>
            <td>Nitendo</td>
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
