import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login_User() {

    const {handleSubmit, control} = useForm();

    const onSubmit = async (data) => {
        console.log(data); // Os dados do formulário serão impressos aqui
    

        try {
        // faz a comunicação com o axios
        const response =  await axios.post('http://localhost:3000/users/login', data)
        toast.success('Login realizado com sucesso!')
        
        const userLocalStorage = response.data;
        localStorage.setItem('user', JSON.stringify(userLocalStorage));
        window.location.href = './MinhaArea';
        
        } catch (error) {
            toast.error('Falha ao realizar login')
        }
       
      };
    
    return (
        <div>
            <div className="Login_Box2">
                <div>
                    <img src="src/assets/img_barnav/image.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='Text_Log2'>
                            <span>Entrar</span>
                            <p>Fazer Login Com Sua Conta </p>
                            <p>GameHub</p>
                        </div>


                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Digite o seu e-mail'}}
                            render={({ field, fieldState }) => (
                            <div className='Inputs2'>
                                {/* <label>Nome</label> */}
                                <input {...field}  placeholder='Digite o seu e-mail' type='email' required />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                             )} 
                          />

                          
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Digite a sua senha'}}
                            render={({ field, fieldState }) => (
                            <div className='Inputs2'>
                                {/* <label>Nome</label> */}
                                <input {...field}  placeholder='Digite sua senha' type='password' required />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                             )} 
                          />
                          
                        <button className='Botao_Log2' type='subtmit'>Entrar</button>

                        
                        <div className='Login_Dir2'>
                            <p>Não Tem Conta ? <Link to='/Cadastro'>Cadastre-se</Link></p>
                        </div>

                        <div className='Politica'>
                            <a href="/">Política e Privacidade</a>
                        </div>
                        <div className='Return'>
                            <Link to='/'>Voltar para a Home</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
