import './HomePage.css'
import React from "react";
import NotesEditor from "../components/NotesEditor";

export default function CommonPage({
        model,
        isDescriptionEdit,
        isNotesEdit,
        setIsNotesEdit,
        setIsDescriptionEdit,
        setModel,
        children
    }) {
        const toggleNotes = () => setIsNotesEdit(!isNotesEdit)
        const toggleDescription = () => setIsDescriptionEdit(!isDescriptionEdit)

        const handleNotesClick = toggleNotes
        const handleDescriptionClick = toggleDescription
        const onNotesDiscard = toggleNotes
        const onDescriptionDiscard = toggleDescription
        const onNotesApply = (data) => {
            setModel({ ...model, notes: data })
            toggleNotes()
        }
        const onDescriptionApply = (data) => {
            setModel({ ...model, description: data })
            toggleDescription()
        }

        return <>
            <h1 className="title">{model.name}</h1>
            {
                isDescriptionEdit
                    ? <NotesEditor onApply={onDescriptionApply} onDiscard={onDescriptionDiscard} value={model.description}/>
                    : <p className="description" onClick={handleDescriptionClick}>
                        {model.description}
                    </p>
            }

            {
                isNotesEdit
                    ? <NotesEditor onApply={onNotesApply} onDiscard={onNotesDiscard} value={model.notes}/>
                    : <p className="notes" onClick={handleNotesClick}>
                        {model.notes}
                    </p>
            }

            { children }
        </>
}