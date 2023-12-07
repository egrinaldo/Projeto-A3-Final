
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Cadastro.css';

export default function Cad_User() {

    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        // faz a comunicação com o axios
        try {
            const response = await axios.post('http://localhost:3000/users', data)
            toast.success('Cadastro realizado com sucesso!');
        }
        catch (error) {
            toast.error('Erro ao cadastrar usuário! Error: ' + error.message);
        }



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
                        rules={{ required: 'Nome é obrigatório' }}
                        render={({ field, fieldState }) => (
                            <div className='Inputs'>
                                {/* <label>Nome</label> */}
                                <input {...field} placeholder='Digite seu nome' id='nome_user' />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                        )}
                    />

                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Username é obrigatório' }}
                        render={({ field, fieldState }) => (
                            <div className='Inputs'>
                                {/* <label>Nome</label> */}
                                <input {...field} placeholder='Digite seu usuário' id='nome_user' />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Email é obrigatório', pattern: /^\S+@\S+$/i }}
                        render={({ field, fieldState }) => (
                            <div className='Inputs'>
                                {/* <label>Nome</label> */}
                                <input {...field} placeholder='Digite seu email' id='email' />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Senha é obrigatório', minLength: { value: 6, message: 'Senha deve ter no mínimo 6 caracteres' } }}
                        render={({ field, fieldState }) => (
                            <div className='Inputs'>
                                {/* <label>Nome</label> */}
                                <input {...field} placeholder='Digite sua senha' id='senha' type='password' />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </div>
                        )}
                    />

                    <button type='submit' className='Botao_Log'>Inscreva-se</button>

                    <div className='Login_Dir'>
                        <p>Já é inscrito? <Link to='/Login'>Faça o login</Link></p>
                    </div>

                    <div className='Politica'>
                        <a href="/Politica">Política e Privacidade</a>
                    </div>
                </form>


            </div>

        </div>
    )
}
