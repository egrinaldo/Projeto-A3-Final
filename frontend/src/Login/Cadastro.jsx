
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Cadastro.css';

export default function Cad_User() {

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Os dados do formulário serão impressos aqui
  };

  return (
    
    <div className="Login_Box">
      <div>
        <img src="src/assets/img_barnav/image.png" alt="" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='Text_Log'>
            <span>Cadastro</span>
            <p>Crie uma conta gratuita com seu e-mail.</p>
          </div>

          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Nome é obrigatório'}}
            render={({ field, fieldState }) => (
              <div className='Inputs'>
                {/* <label>Nome</label> */}
                <input {...field}  placeholder='Digite seu nome' id='nome_user' />
                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
              </div>
            )} 
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'Email é obrigatório', pattern: /^\S+@\S+$/i}}
            render={({ field, fieldState }) => (
              <div className='Inputs'>
                {/* <label>Nome</label> */}
                <input {...field}  placeholder='Digite seu email' id='email' />
                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
              </div>
            )} 
          />

<Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Senha é obrigatório', minLength: {value: 6, message: 'Senha deve ter no mínimo 6 caracteres'}}}
            render={({ field, fieldState }) => (
              <div className='Inputs'>
                {/* <label>Nome</label> */}
                <input {...field}  placeholder='Digite sua senha' id='senha' type='password' />
                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
              </div>
            )} 
          />
          
          <button type='submit' className='Botao_Log'>Inscreva-se</button>

          <div className='Login_Dir'>
            <p>Já é inscrito? <Link to='/Login'>Faça o login</Link></p>
          </div>

        </form>
      </div>

    </div>
  )
}
