
import { useState } from 'react'
import './Cadastro.css'

export default function Cad_User() {

  const  [data, setdata] = useState ({
    nome:'',
    nome_usuario:'',
    email:'',
    senha:'',
    conf_senha:''

  });

  const valorInput = e => setdata({...data, [e.target.name]: e.target.value});

  const sendCad = (e) => {
    e.preventDefault();
    console.log(`Nome: ${data.nome}`);
    console.log(`nome_usuario: ${data.nome_usuario}`);
    console.log(`email: ${data.email}`);
    console.log(`email: ${data.email}`);
    console.log(`conf_senha: ${data.conf_senha}`);
  }

  return (
    
    <div className="Login_Box">
      <div>
        <img src="src/assets/img_barnav/image.png" alt="" />
      </div>
      <div>
        <form onSubmit={sendCad}>
          <div className='Text_Log'>
            <span>Cadastro</span>
            <p>Crie uma conta gratuita com seu e-mail.</p>
          </div>

          <div className='Inputs'>
            <input type='text' name='nome' id='nome'  onChange={valorInput} placeholder='Informe Seu Nome Completo' />
          </div>    

          <div className='Inputs'>
            <input type='text' name='nome_usuario' id='nome_user' onChange={valorInput} placeholder='Digite Nome de Usuário' />
          </div>

          <div className='Inputs'>
            <input type='email' name='email' id='email' onChange={valorInput} placeholder='Digite Seu E-mail' />
          </div>

          <div className='Inputs'>
            <input type='password' name='senha' id='senha' onChange={valorInput}  placeholder='Informe Sua Senha ' />
          </div>

          <div className='Inputs'>
            <input type='password' name='conf_senha' id='conf_senha' onChange={valorInput} placeholder='Confirme Sua Senha' />
          </div>

          <button type='submit' className='Botao_Log'>Inscreva-se</button>

          <div className='Login_Dir'>
            <p>Já é Inscrito teste? <a href="/Login">Entrar</a></p>
          </div>

        </form>
      </div>

    </div>
  )
}
