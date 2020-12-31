import React, {useState} from "react";
import CommonPage from "./CommonPage";
import "./PlacePage.css";
import CommonList from "../components/CommonList";
import ImageList from "../components/ImageList";

const defaultPlace = {
    id: '1',
    name: 'place 1',
    notes: 'qwe',
    description: 'qwe',
    images: [
        {id: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBqKe6QDuk-yX1hcTJLvDcX8U7zkOTaUhYg&usqp=CAU'},
        {id: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBqKe6QDuk-yX1hcTJLvDcX8U7zkOTaUhYg&usqp=CAU'},
        {id: '3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBqKe6QDuk-yX1hcTJLvDcX8U7zkOTaUhYg&usqp=CAU'},
        {id: '4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBqKe6QDuk-yX1hcTJLvDcX8U7zkOTaUhYg&usqp=CAU'},
        {id: '5', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBqKe6QDuk-yX1hcTJLvDcX8U7zkOTaUhYg&usqp=CAU'}
    ],
    NPCs: [
        {id: '1', name: 'something'},
        {id: '2', name: 'something'},
        {id: '3', name: 'something'},
        {id: '4', name: 'something'},
        {id: '5', name: 'something'}
    ],
    items: [
        {id: '1', name: 'something'},
        {id: '2', name: 'something'},
        {id: '3', name: 'something'},
        {id: '4', name: 'something'},
        {id: '5', name: 'something'}
    ],
    enemies: [
        {id: '1', name: 'something'},
        {id: '2', name: 'something'},
        {id: '3', name: 'something'},
        {id: '4', name: 'something'},
        {id: '5', name: 'something'}
    ]
}

export default function PlacePage(props) {
    const [ isNotesEdit, setIsNotesEdit ] = useState(false)
    const [ isDescriptionEdit, setIsDescriptionEdit ] = useState(false)
    const [ place, setPlace ] = useState(defaultPlace)
    const onAddItemClick = () => {};
    const onAddImageClick = () => {};
    const onAddEnemyClick = () => {};
    const onAddNPCClick = () => {};

    return <section className="home-page-wrapper">
        <CommonPage
            model={place}
            isDescriptionEdit={isDescriptionEdit}
            isNotesEdit={isNotesEdit}
            setIsNotesEdit={setIsNotesEdit}
            setIsDescriptionEdit={setIsDescriptionEdit}
            setModel={setPlace}
        >
            <div className="place-content">
                <section className="npcs-wrapper">
                    <h2>NPC:</h2>
                    <CommonList onAddItemClick={onAddNPCClick} items={place.NPCs}/>
                </section>
                <section className="items-wrapper">
                    <h2>Items:</h2>
                    <CommonList onAddItemClick={onAddItemClick} items={place.items}/>
                </section>
                <section className="enemies-wrapper">
                    <h2>Enemies:</h2>
                    <CommonList onAddItemClick={onAddEnemyClick} items={place.enemies}/>
                </section>
                <section className="images-wrapper"><h2>Items:</h2>
                    <ImageList onAddItemClick={onAddImageClick} items={place.images}/>
                </section>
            </div>
        </CommonPage>
    </section>
}