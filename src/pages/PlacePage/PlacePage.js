import React, {useEffect, useState} from "react";
import CommonPage from "../CommonPage";
import "./PlacePage.css";
import CommonList from "../../components/CommonList";
import ImageList from "../../components/ImageList";
import {getAdventureLoaded, getPlace} from "../../store/selectors";
import { connect } from "react-redux";
import {loadPlaces, openModal, savePlace, updatePlace} from "../../store/actionCreators";
import {ADD_ENEMY_MODAL, ADD_IMAGE_MODAL, ADD_ITEM_MODAL} from "../../constants";

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

function PlacePage({match, openModal, initialPlace, loadPlaces, adventureLoaded, updatePlace}) {
    const [ isNotesEdit, setIsNotesEdit ] = useState(false)
    const [ isDescriptionEdit, setIsDescriptionEdit ] = useState(false)
    const [ place, setPlace ] = useState(defaultPlace);

    useEffect(
        async () => {
            if(initialPlace) {
                return setPlace(Object.assign({}, defaultPlace, initialPlace));
            }
            const places = await loadPlaces();
            const currentPlace = places.payload.find(
                place => place._id ===  match.params.id
            )
            setPlace(Object.assign({}, defaultPlace, currentPlace));
        }, [match]
    );

    const onAddItemClick = () => {
        openModal(ADD_ITEM_MODAL)
    };
    const onAddImageClick = () => {
        openModal(ADD_IMAGE_MODAL)
    };
    const onAddEnemyClick = () => {
        openModal(ADD_ENEMY_MODAL)
    };
    const onAddNPCClick = () => {};

    const updatePlaceHandler = (place) => {
        setPlace(place);
        updatePlace(place)
    };

    return <section className="home-page-wrapper">
        {
            adventureLoaded ?
                <CommonPage
                    model={place}
                    isDescriptionEdit={isDescriptionEdit}
                    isNotesEdit={isNotesEdit}
                    setIsNotesEdit={setIsNotesEdit}
                    setIsDescriptionEdit={setIsDescriptionEdit}
                    updateModel={updatePlaceHandler}
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
                        <section className="images-wrapper"><h2>Images:</h2>
                            <ImageList onAddItemClick={onAddImageClick} items={place.images}/>
                        </section>
                    </div>
                </CommonPage>
                : <div>Loading</div>
        }

    </section>
}

const mapStateToProps = (store, ownProps) => ({
    initialPlace: getPlace(store, ownProps.match.params.id),
    adventureLoaded: getAdventureLoaded(store),
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (name) => dispatch(openModal(name)),
    loadPlaces: () => dispatch(loadPlaces()),
    updatePlace: (place) => dispatch(updatePlace(place))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);