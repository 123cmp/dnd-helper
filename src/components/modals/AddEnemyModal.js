import EnemiesPage from "../../pages/EnemiesPage/EnemiesPage";
import React from "react";
import {connect} from "react-redux";
import CommonModal from "./CommonModal";
import {closeModal} from "../../store/actionCreators";

function AddEnemyModal({modalIsOpen, closeModal}) {
    const onItemSelect = (item) => {
        console.log(item);
        closeModal()
    }

    return <CommonModal
        modalIsOpen={modalIsOpen}
    >
        <EnemiesPage onItemSelect={onItemSelect}/>
    </CommonModal>
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(AddEnemyModal)
