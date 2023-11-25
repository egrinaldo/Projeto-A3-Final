import axios from 'axios';
import PropTypes from "prop-types";
import { Controller, useForm } from 'react-hook-form';
import './EditModal.css';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useAuth } from "../../app/hooks/useAuth"

export function EditModal({ game, onSave, onClose }){

    const [plataformas, setPlataformas] = useState([])
    const [categorias, setCategorias] = useState([])
    const { handleSubmit, control } = useForm();

    const handleSave = (games) => {
        onSave({ ...games });
        onClose();
    };

    const { userLogado } = useAuth();

    const userId = userLogado();

    const editarJogo = async (data) => {
        try {
            const obj = { ...data, id: game.id }
            const games = await axios.put(`http://localhost:3000/games/${game.id}`, obj)
            handleSave(games.data);

        } catch (error) {
            console.log(error)
        }
    }

    const carregarDados = async () => {
        try {
            const platforms = await axios.get(`http://localhost:3000/platforms/${userId}`)
            setPlataformas(platforms.data)

            const categorias = await axios.get('http://localhost:3000/categories')
            setCategorias(categorias.data)

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        carregarDados()
    }, [])


    return (
        <form onSubmit={handleSubmit(editarJogo)}>
            <div className="modal">
                <div className="modal-content">
                    <h2 id='edit_game'>Editar Jogo</h2>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={game.name}
                        rules={{ required: 'Digite o nome do jogo' }}
                        render={({ field, fieldState }) => (
                            <>
                                {/* <label>Nome</label> */}
                                <input {...field} className='Pla_Game' placeholder='Nome do jogo' id='Jg_Game' type='text' required />
                                {fieldState.error && <p id='error-message'>{fieldState.error.message}</p>}
                            </>
                        )}
                    />

<Controller
                            name="platformId"
                            control={control}
                            defaultValue={game.platformId}
                            rules={{ required: 'Selecione a plataforma' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado2" >
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
                            defaultValue={game.categoryId}
                            rules={{ required: 'Selecione a categoria' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado2" >
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
                            defaultValue={game.status}
                            rules={{ required: 'Selecione o status' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <select {...field} className="Jg_Select" id="Jg_Estado2" >
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
                            defaultValue={game.rated}
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


                    <div id='butSaveLock'>
                    <button id='butSalvarFechar' type='submit'>Salvar</button>
                    <button id='butSalvarFechar' onClick={onClose}>Fechar</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

EditModal.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        platformId: PropTypes.number.isRequired,
        categoryId: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        rated: PropTypes.number.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
