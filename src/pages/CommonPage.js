import './HomePage/HomePage.css'
import React, {useEffect, useState} from "react";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import Button from "react-bootstrap/Button";

const mdParser = new MarkdownIt();

export default function CommonPage({
        model,
        isDescriptionEdit,
        isNotesEdit,
        setIsNotesEdit,
        setIsDescriptionEdit,
        updateModel,
        children
    }) {

    const toggleNotes = () => setIsNotesEdit(!isNotesEdit)
    const toggleDescription = () => setIsDescriptionEdit(!isDescriptionEdit)

    const handleNotesClick = toggleNotes;
    const handleDescriptionClick = toggleDescription;
    const [ internalModel, setInternalModel ] = useState(model);

    useEffect(() => {
        setInternalModel(model);
    }, [model])

    const onNotesApply = () => {
        updateModel(internalModel)
        toggleNotes()
    }
    const onDescriptionDiscard = () => {
        setInternalModel({ ...internalModel, description: model.description });
        toggleDescription();
    }
    const onNotesDiscard = () => {
        setInternalModel({ ...internalModel, notes: model.notes });
        toggleNotes();
    }
    const onDescriptionApply = () => {
        updateModel(internalModel)
        toggleDescription();
    }
    const onNotesChange = (data) => {
        setInternalModel({ ...internalModel, notes: data.text });
    }
    const onDescriptionChange = (data) => {
        setInternalModel({ ...internalModel, description: data.text });
    }
    const getHtml = (text) => {
        return mdParser.render(text)
    }

    return <>
        <h1 className="title">{model.name}</h1>

        {
            isDescriptionEdit
                ? (<div>
                        <MdEditor
                            renderHTML={(text) => mdParser.render(text)}
                            style={{'height': '500px'}}
                            value={internalModel.description}
                            onChange={onDescriptionChange}
                        />
                        <div className="button-wrapper">
                            <Button onClick={onDescriptionApply} className="button" variant="primary">Apply</Button>
                            <Button onClick={onDescriptionDiscard} className="button" variant="secondary">Discard</Button>
                        </div>
                    </div>
                )
                : <p className="description custom-html-style"
                     dangerouslySetInnerHTML={{__html: getHtml(internalModel.description)}}
                     onClick={handleDescriptionClick}>
                </p>
        }
        {
            isNotesEdit
                ? (<div>
                        <MdEditor
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={onNotesChange}
                            value={internalModel.notes}
                        />
                        <div className="button-wrapper custom-html-style">
                            <Button onClick={onNotesApply} className="button" variant="primary">Apply</Button>
                            <Button onClick={onNotesDiscard} className="button" variant="secondary">Discard</Button>
                        </div>
                    </div>
                )
                : <p className="notes"
                     dangerouslySetInnerHTML={{__html: getHtml(internalModel.notes)}}
                     onClick={handleNotesClick}>
                </p>
        }

        {children}
    </>
}