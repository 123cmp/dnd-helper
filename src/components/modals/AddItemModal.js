import React, {useState} from "react";
import {connect} from "react-redux";
import CommonModal from "./CommonModal";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {closeModal} from "../../store/actionCreators";

function AddItemModal({modalIsOpen, closeModal}) {
    const [moneyEntity, setMoneyEntity] = useState({
        g: 0,
        s: 0,
        c: 0
    })

    const [customEntity, setCustomEntity] = useState({
        name: "",
        worth: 0
    })

    const changeMoneyField = (type) => (event) => {
        setMoneyEntity({
            ...moneyEntity,
            [type]: event.target.value
        })
    }

    const submitMoneyEntity = () => {
        console.log(moneyEntity);
        closeModal();
    }

    const changeCustomField = (type) => (event) => {
        setCustomEntity({
            ...customEntity,
            [type]: event.target.value
        })
    }

    const submitCustomEntity = () => {
        console.log(customEntity);
        closeModal();
    }

    return <CommonModal
        modalIsOpen={modalIsOpen}
    >
        <div className="helper-modal">
            <section>
                <h1>Gold</h1>
                <Form className="default-form">
                    <FormControl onChange={changeMoneyField('g')} type="number" placeholder="Gold"/>
                    <FormControl onChange={changeMoneyField('s')} type="number" placeholder="Silver"/>
                    <FormControl onChange={changeMoneyField('c')} type="number" placeholder="Copper"/>
                    <Button variant="primary" type="submit" onClick={submitMoneyEntity}>
                        Submit
                    </Button>
                </Form>
            </section>

            <section>
                <h1>Custom</h1>
                <Form className="default-form">
                    <FormControl onChange={changeCustomField('name')} type="text" placeholder="Name"/>
                    <FormControl onChange={changeCustomField('worth')} type="number" placeholder="Worth"/>
                    <Button variant="primary" type="submit" onClick={submitCustomEntity}>
                        Submit
                    </Button>
                </Form>
            </section>
        </div>
    </CommonModal>
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(AddItemModal)
