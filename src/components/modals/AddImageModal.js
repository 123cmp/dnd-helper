import React, {useState} from "react";
import {connect} from "react-redux";
import CommonModal from "./CommonModal";
import {closeModal} from "../../store/actionCreators";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function AddImageModal({modalIsOpen, closeModal}) {
    const [ url, setUrl ] = useState("");

    const changeImageUrl = (event) => {
        setUrl(event.target.value)
    }

    const submit = () => {
        console.log(url);
        closeModal()
    }

    return <CommonModal
        modalIsOpen={modalIsOpen}
    >
        <div className="helper-modal">
            <section>
                <h1>Add image</h1>
                <Form className="default-form">
                    <FormControl onChange={changeImageUrl} type="text" placeholder="Url"/>
                    <Button variant="primary" type="submit" onClick={submit}>
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

export default connect(null, mapDispatchToProps)(AddImageModal)
