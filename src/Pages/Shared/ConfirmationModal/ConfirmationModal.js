import React from 'react';

const ConfirmationModal = ({title, message, handleDeleteProduct, modalData, cancelModal}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleDeleteProduct(modalData)} htmlFor="confirmation-modal" className="btn">Yes</label>
                        <button onClick={cancelModal} className="btn btn-error btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;