import axios from 'axios'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiFillDelete, AiOutlineClear } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { HiSaveAs } from 'react-icons/hi'
import './Cad_Jogos.css'
import './Tab_Jogos.css'

export default function Cad_Jogos() {
    const { handleSubmit, control } = useForm()

    const [plataformas, setPlataformas] = useState([])
    const [categorias, setCategorias] = useState([])
    const [games, setGames] = useState([])

    const userLogado = JSON.parse(localStorage.getItem('user'))
    const userId = userLogado.user[0].id

    const cadastrarJogo = async (data) => {
        try {
            const obj = { ...data, userId }
            const game = await axios.post('http://localhost:3000/games', obj)
            setGames(game.data)
            toast.success('Jogo cadastrado com sucesso!')
        } catch (error) {
            toast.error('Falha ao cadastrar o jogo!')
        }
    }

    const carregarDados = async () => {
        try {
            const platforms = await axios.get(`http://localhost:3000/platforms/${userId}`)
            setPlataformas(platforms.data)

            const categorias = await axios.get('http://localhost:3000/categories')
            setCategorias(categorias.data)

            const games = await axios.get(`http://localhost:3000/games/${userId}`)
            console.log(games.data)
            setGames(games.data)
        } catch (error) {
            toast.error('Falha ao carregar os dados')
        }
    }

    useEffect(() => {
        carregarDados()
    }, [])

    const excluirGame = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/games/${id}`)
            toast.success('Jogo excluído com sucesso!')
            carregarDados()
        } catch (error) {
            toast.error('Falha ao excluir o jogo')
        }
    }


    return (
        <>
            <div className="cad_Form">
                <div className="card_cadNome">
                    <p>MINHA ÁREA</p>

                </div>
                <div>
                    <form className="Form_Jg" onSubmit={handleSubmit(cadastrarJogo)}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Digite o nome do jogo' }}
                            render={({ field, fieldState }) => (
                                <>
                                    {/* <label>Nome</label> */}
                                    <input {...field} className='Jg_Game' placeholder='Nome do jogo' id='Jg_Game' type='text' required />
                                    {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                                </>
                            )}
                        />
                        <Controller
                            name="platformId"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Selecione a plataforma' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado" >
                                        <option value="">Plataforma</option>
                                        {plataformas.map((plataforma) => (
                                            <option key={plataforma.id} value={plataforma.id}>
                                                {plataforma.name}
                                            </option>
                                        ))}
                                    </select>
                                    {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                                </>
                            )}
                        />

                        <Controller
                            name="categoryId"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Selecione a categoria' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado" >
                                        <option value="">Categoria</option>
                                        {categorias.map((categorias) => (
                                            <option key={categorias.id} value={categorias.id}>
                                                {categorias.name}
                                            </option>
                                        ))}
                                    </select>
                                    {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                                </>
                            )}
                        />

                        <Controller
                            name="status"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Selecione o status' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado" >
                                        <option value="">Estado do jogo</option>
                                        <option value="ativo">Ativo</option>
                                        <option value="pausado">Pausado</option>
                                        <option value="finalizado">Finalizado</option>
                                    </select>
                                    {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                                </>
                            )}
                        />

                        <Controller
                            name="rated"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Digite a nota do jogo',
                                pattern: {
                                    value: /^(10|\d(\.\d)?)$/, // Aceita números inteiros de 0 a 10 ou decimais no formato X.X
                                    message: 'Digite um número válido entre 0 e 10'
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <>
                                    <input {...field} className="Jg_Game" type="text" placeholder="Nota do jogo" id="Jg_Desenv" required />
                                    {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                                </>
                            )}
                        />

                        <div className='buttonsCadJg'>
                            <button id='limpar' type='reset'>< AiOutlineClear /></button>

                            <button id='salvar' type='submit'><HiSaveAs /></button>

                        </div>

                    </form>
                </div>
            </div>
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
                        {games.map((item, index) => (
                            <tr key={index} className='Form_Dados'>
                                <td>{item.rated}</td>
                                <td>{item.name}</td>
                                <td>{item.platformName}</td>
                                <td>{item.categoryName}</td>
                                <td>{item.status}</td>
                                <td><button id='edit'><BiEdit /></button></td>
                                <td><button id='excluir' onClick={() => excluirGame(item.id)}><AiFillDelete /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
