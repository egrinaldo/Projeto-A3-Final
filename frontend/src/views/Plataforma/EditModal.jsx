// EditModal.js
import PropTypes from "prop-types";
import { useState } from 'react';
import './EditModal.css';

export function EditModal({ platform, onSave, onClose }) {
    const [editedName, setEditedName] = useState(platform.name);

    const handleSave = () => {
        onSave({ ...platform, name: editedName });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Editar Platforma</h2>
                <label htmlFor="editedName">Nome:</label>
                <input
                    type="text"
                    id="editedName"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={handleSave}>Salvar</button>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
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
