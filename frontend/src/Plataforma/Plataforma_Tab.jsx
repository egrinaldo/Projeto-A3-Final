import { AiFillDelete } from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi';

import './Plataforma_Tab.css'

export default function Plataforma_Tab() {
  return (
    <div className='Form_Tab'>
      <table className='Form_Grid'>
        <thead>
        <tr className='Form_Name'>
            <th>Id</th>
            <th>PLATAFORMA</th>
        </tr>
        </thead>
        <tbody>
        <tr className='Form_Dados'>
            <td>9</td>
            <td>ZELDA</td>
            <td><button id='edit' type='submit'><BiEdit /></button></td>
            <td><button id='excluir' type='reset'>< AiFillDelete /></button></td>    
        </tr>
        </tbody>
        
      </table>
    </div>
  )
}
