import './HomePage.css'
import React, {useState} from "react";
import CommonPage from "../CommonPage";
import {connect} from "react-redux";
import {getAdventureLoaded, getCurrentAdventure} from "../../store/selectors";
import {closeModal, updateAdventure} from "../../store/actionCreators";
import 'react-markdown-editor-lite/lib/index.css';

function HomePage({
        currentAdventure,
        isAdventureLoaded,
        updateAdventure
    }) {
        const [ isNotesEdit, setIsNotesEdit ] = useState(false)
        const [ isDescriptionEdit, setIsDescriptionEdit ] = useState(false)

        const updateModel = (model) => {
            updateAdventure(model);
        }

        if(!isAdventureLoaded) {
            return <></>
        }

        return <section className="home-page-wrapper">
            <CommonPage
                model={currentAdventure}
                isDescriptionEdit={isDescriptionEdit}
                isNotesEdit={isNotesEdit}
                setIsNotesEdit={setIsNotesEdit}
                setIsDescriptionEdit={setIsDescriptionEdit}
                updateModel={updateModel}
            >
                something
            </CommonPage>
        </section>
}

const mapStateToProps = (state) => {
    return {
        currentAdventure: getCurrentAdventure(state),
        isAdventureLoaded: getAdventureLoaded(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateAdventure: (adventure) => dispatch(updateAdventure(adventure))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)