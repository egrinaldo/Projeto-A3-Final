import axios from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillDelete, AiOutlineClear } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { HiSaveAs } from 'react-icons/hi';
import EditModal from './EditModal';
import "./Plataforma_Cad.css";


export default function Plataforma_Cad() {

    const { handleSubmit, control } = useForm();
    const [plataformas, setPlataformas] = useState([]);
    const userLogado = JSON.parse(localStorage.getItem('user'));
    const userId = userLogado.user[0].id;

    const carregarPlataformas = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/platforms/${userId}`);
            setPlataformas(response.data);
        } catch (error) {
            toast.error('Falha ao carregar as plataformas');
        }
    };

    const excluirPlataforma = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/platforms/${id}`);
            toast.success('Plataforma excluída com sucesso!');
            carregarPlataformas();
        }
        catch (error) {
            toast.error('Falha ao excluir a plataforma');
        }
    }

    useEffect(() => {
        carregarPlataformas();
    }, []); // O array vazio assegura que o useEffect seja executado apenas uma vez no montagem do componente

    const onSubmit = async (data) => {

        const obj = { ...data, userId };
        try {
            const response = await axios.post('http://localhost:3000/platforms', obj);
            toast.success('Plataforma cadastrada com sucesso!');
            setPlataformas([...plataformas, response.data[0]]);
        } catch (error) {
            toast.error('Falha ao cadastrar a plataforma');
        }
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [editingPlatform, setEditingPlatform] = useState(null);

    const openModal = (platform) => {
        setEditingPlatform(platform);
        setModalVisible(true);
    };

    const closeModal = () => {
        setEditingPlatform(null);
        setModalVisible(false);
    };

    return (
        <>
            <div className="cad_Form">
                <div className="card_cadNome">
                    <p>Cadastro da Plataforma</p>

                </div>
                <div>
                    <form className="Form_Jg" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Digite o nome da plataforma' }}
                            render={({ field, fieldState }) => (
                                <>
                                    {/* <label>Nome</label> */}
                                    <input {...field} className='Pla_Game' placeholder='Nome da plataforma' id='Jg_Game' type='text' required />
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
                            <th>Id</th>
                            <th>Plataforma</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plataformas.map((item, index) => (
                            <tr key={index} className='Form_Dados'>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button id='edit' onClick={() => openModal(item)}><BiEdit /></button></td>
                                <td><button id='excluir' onClick={() => excluirPlataforma(item.id)}><AiFillDelete /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {modalVisible && (
                    <EditModal
                        platform={editingPlatform}
                        onSave={(editedPlatform) => {
                            // Implemente a lógica para salvar as alterações no backend
                            console.log('Salvar alterações:', editedPlatform);
                        }}
                        onClose={closeModal}
                    />
                )}

            </div>


        </>

    );
}
