import Modal from 'react-modal';
import React from "react";
import {connect} from "react-redux";
import {closeModal} from "../../store/actionCreators";
import "./modals.css";

function CommonModal({modalIsOpen, closeModal, children}) {
    const onItemSelect = (item) => {
        console.log(item);
    }
    const onCloseModal = () => {
        closeModal()
    }
    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel="Example Modal"
    >
        <button type="button" className="close" onClick={onCloseModal}>
            <span aria-hidden="true">×</span>
        </button>
        {children}
    </Modal>
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(CommonModal)
