// EditModal.js
import axios from 'axios';
import PropTypes from "prop-types";
import { Controller, useForm } from 'react-hook-form';
import './EditModal.css';

export function EditModal({ platform, onSave, onClose }) {

    const { handleSubmit, control } = useForm();

    const handleSave = (plataformas) => {
        onSave({ ...plataformas });
        onClose();
    };

    const editarPlataforma = async (data) => {
        try {

            const obj = { ...data, id: platform.id }
            const platforms = await axios.put('http://localhost:3000/platforms', obj)
            handleSave(platforms.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(editarPlataforma)}>
            <div className="modal">
                <div className="modal-content">
                    <h2>Editar Plataforma</h2>
                    {/* <label htmlFor="name">Nome:</label> */}
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
                    <div id='butSaveLock'>
                        <button id='butSalvarFechar' type='submit'>Salvar</button>
                        <button id='butSalvarFechar' onClick={onClose}>Fechar</button>
                    </div>

                </div>
            </div>
        </form>

    );
}

EditModal.propTypes = {
    platform: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
