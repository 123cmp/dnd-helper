import Modal from 'react-modal';
import React, {useEffect} from "react";
import {modalStatuses} from "../../store/selectors";
import {connect} from "react-redux";
import {ADD_ENEMY_MODAL, ADD_IMAGE_MODAL, ADD_ITEM_MODAL, ADD_PLACE_MODAL} from "../../constants";
import AddEnemyModal from "./AddEnemyModal";
import AddItemModal from "./AddItemModal";
import AddImageModal from "./AddImageModal";
import AddPlaceModal from "./AddPlaceModal";

function ModalHost({modalStatuses = {}}) {
    useEffect(() => {
        Modal.setAppElement("body")
    })

    return <>
        <AddEnemyModal modalIsOpen={modalStatuses[ADD_ENEMY_MODAL]}/>
        <AddItemModal modalIsOpen={modalStatuses[ADD_ITEM_MODAL]}/>
        <AddImageModal modalIsOpen={modalStatuses[ADD_IMAGE_MODAL]}/>
        <AddPlaceModal modalIsOpen={modalStatuses[ADD_PLACE_MODAL]}/>
    </>
}

const mapStateToProps = (store, ownProps) => ({
    modalStatuses: modalStatuses(store)
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ModalHost)