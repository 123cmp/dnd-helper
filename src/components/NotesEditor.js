import Button from "react-bootstrap/Button";
import './NotesEditor.css'
import React, {useState} from "react";
import {TextareaAutosize} from "react-autosize-textarea/lib/TextareaAutosize";

export default function NotesEditor({ value, onDiscard, onApply }) {
    const [ innerValue, setInnerValue ] = useState(value)
    const handleApply = () => onApply(innerValue)

    return <div className="notes-editor-wrapper">
        <TextareaAutosize
            className="edit-notes"
            defaultValue={innerValue}
            onChange={e => setInnerValue(e.currentTarget.value)}
        />
        <div className="button-wrapper">
            <Button onClick={onDiscard} className="button" variant="secondary">Discard</Button>
            <Button onClick={handleApply} className="button" variant="primary">Apply</Button>
        </div>
    </div>
}