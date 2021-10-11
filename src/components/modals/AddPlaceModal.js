import React, {useState} from "react";
import {connect} from "react-redux";
import CommonModal from "./CommonModal";
import {closeModal, createPlace} from "../../store/actionCreators";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function AddPlaceModal({modalIsOpen, closeModal, createPlace}) {
    const [ placeEntity, setPlaceEntity ] = useState({
        name: "",
        description: "",
        notes: ""
    })

    const changeEntityField = (type) => (event) => {
        setPlaceEntity({
            ...placeEntity,
            [type]: event.target.value
        })
    }

    const submitPlaceEntity = () => {
        createPlace(placeEntity);
        closeModal();
    }

    return <CommonModal
        modalIsOpen={modalIsOpen}
    >
        <div className="helper-modal">
            <section>
                <h1>Add place</h1>
                <Form className="default-form">
                    <FormControl onChange={changeEntityField("name")} type="text" placeholder="Name"/>
                    <Form.Control as="textarea" onChange={changeEntityField("description")}/>
                    <Form.Control as="textarea" onChange={changeEntityField("notes")}/>
                    <Button variant="primary" type="submit" onClick={submitPlaceEntity}>
                        Submit
                    </Button>
                </Form>
            </section>
        </div>
    </CommonModal>
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    createPlace: (place) => dispatch(createPlace({...place, id: place.name}))
})

export default connect(null, mapDispatchToProps)(AddPlaceModal)
